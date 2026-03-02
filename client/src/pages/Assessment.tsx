import { useState as useReactState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft } from "lucide-react";
import { useAssessment } from "../context/AssessmentContext";
import { questions as rawQuestions } from "../data/questions";

const QUESTIONS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(rawQuestions.length / QUESTIONS_PER_PAGE);

const options = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" }
];

export default function Assessment() {
  const [, setLocation] = useLocation();
  const { answers, setAnswer } = useAssessment();
  const [currentPage, setCurrentPage] = useReactState(1);
  const [isAnimating, setIsAnimating] = useReactState(false);

  const progress = (currentPage / TOTAL_PAGES) * 100;
  
  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const currentPageQuestions = rawQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const handleOptionSelect = (questionId: number, value: number) => {
    setAnswer(questionId, value);
  };

  const isPageComplete = () => {
    return currentPageQuestions.every(q => answers[q.id]);
  };

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setIsAnimating(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setLocation("/dashboard");
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setIsAnimating(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-[#1a1a1a]">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:inline-block">PathFinder</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-6 flex-1 max-w-xl mx-auto px-8">
            <div className="flex-1">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                <span>Progress</span>
                <span>Page {currentPage} of {TOTAL_PAGES}</span>
              </div>
              <Progress value={progress} className="h-1.5 w-full bg-gray-100 rounded-full" />
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-black">
            Exit
          </Button>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className={`container mx-auto max-w-3xl transition-all duration-300 \${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          
          <div className="space-y-12 mb-16">
            {currentPageQuestions.map((question, idx) => {
              const qId = question.id;
              return (
                <div key={qId} className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-bold text-gray-300 tabular-nums">{(startIndex + idx + 1).toString().padStart(2, '0')}</span>
                    <h2 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900">
                      {question.text}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {options.map((option) => {
                      const isSelected = answers[qId] === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => handleOptionSelect(qId, option.value)}
                          className={`
                            px-4 py-3 rounded-xl border-2 text-center transition-all duration-200 text-xs font-bold uppercase tracking-tight
                            \${isSelected 
                              ? 'border-black bg-black text-white' 
                              : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200 hover:bg-white hover:text-gray-600'
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-12 border-t border-gray-100">
            <Button 
              variant="ghost" 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="text-gray-400 hover:text-black font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Previous
            </Button>

            <Button 
              onClick={handleNext}
              disabled={!isPageComplete()}
              className="bg-black text-white hover:bg-black/90 rounded-md px-10 h-12 text-sm font-bold shadow-lg shadow-black/10"
            >
              {currentPage === TOTAL_PAGES ? 'Finish Analysis →' : 'Next Page →'}
            </Button>
          </div>
          
        </div>
      </main>
    </div>
  );
}