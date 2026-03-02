import { useState } from "wouter/preact";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState as useReactState, useEffect } from "react";

const rawQuestions = [
  "I enjoy working with tools, machines, or equipment to build or fix things.",
  "I prefer hands-on work over working at a desk with paperwork.",
  "I like activities that involve physical coordination and working with my hands.",
  "I enjoy solving complex scientific or mathematical problems that require deep thinking.",
  "I like conducting research or experiments to discover how things work.",
  "I am naturally curious and enjoy analyzing data to find patterns and insights.",
  "I enjoy creating art, music, writing, or other forms of creative expression.",
  "I like working on projects where I can use my imagination and originality.",
  "I prefer unstructured, creative work over routine tasks with clear procedures.",
  "I enjoy helping people solve their problems or overcome challenges.",
  "I like teaching, training, or mentoring others to help them grow.",
  "I feel fulfilled when I can make a positive difference in someone's life.",
  "I enjoy leading teams and taking charge of projects to achieve goals.",
  "I like persuading others and influencing decisions or outcomes.",
  "I am motivated by competition, achievement, and taking on new challenges.",
  "I prefer working with clear procedures, guidelines, and established systems.",
  "I enjoy organizing data, maintaining accurate records, and managing details.",
  "I like working with numbers, spreadsheets, and detailed information.",
  "I actively seek out new experiences and enjoy learning about unfamiliar topics.",
  "I have a vivid imagination and like to think creatively about possibilities.",
  "I am curious about many different subjects and enjoy intellectual discussions.",
  "I am highly organized and like to plan ahead to ensure everything is done properly.",
  "I pay close attention to details and take pride in producing high-quality work.",
  "I am disciplined and complete tasks promptly without procrastinating.",
  "I feel energized when I'm around other people and enjoy social interactions.",
  "I am comfortable starting conversations and meeting new people.",
  "I don't mind being the center of attention and enjoy leading group discussions.",
  "I am naturally sympathetic and can easily understand others' feelings and perspectives.",
  "I am cooperative and prefer harmony over conflict in relationships.",
  "I often put others' needs before my own and genuinely care about their well-being.",
  "I remain calm and composed even in stressful or challenging situations.",
  "I don't get easily stressed or anxious about problems or uncertainties.",
  "I can handle pressure well and maintain my emotional balance during difficult times.",
  "I am skilled at breaking down complex problems into smaller parts and finding logical solutions.",
  "I can explain difficult concepts clearly and adapt my communication style to different audiences.",
  "I am comfortable working with numbers, statistics, and mathematical calculations.",
  "I can easily visualize three-dimensional objects and understand spatial relationships.",
  "People find it easy to talk to me, and I build rapport quickly with others.",
  "I pick up new software, tools, and technologies quickly and enjoy learning technical skills.",
  "I frequently come up with original ideas and innovative solutions to problems.",
  "I excel at organizing my workspace, managing my time, and keeping systems running smoothly.",
  "People naturally look to me for guidance and direction when working in groups.",
  "I notice small errors and inconsistencies that others often overlook.",
  "It is important to me to accomplish challenging goals and see tangible results from my work.",
  "I prefer having the freedom to make my own decisions without constant supervision.",
  "Being recognized and respected for my expertise and accomplishments matters to me.",
  "Building strong, positive relationships with colleagues is essential to my job satisfaction.",
  "I value a low-stress work environment with good work-life balance.",
  "I want my work to contribute to making the world a better place and helping others.",
  "Job stability, steady income, and long-term security are top priorities for me.",
  "I need variety and new challenges in my daily tasks to stay engaged and motivated."
];

const QUESTIONS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(rawQuestions.length / QUESTIONS_PER_PAGE);

const options = [
  { value: 1, label: "Strongly Disagree", color: "hover:border-rose-400 hover:bg-rose-50" },
  { value: 2, label: "Disagree", color: "hover:border-orange-300 hover:bg-orange-50" },
  { value: 3, label: "Neutral", color: "hover:border-slate-300 hover:bg-slate-50" },
  { value: 4, label: "Agree", color: "hover:border-emerald-300 hover:bg-emerald-50" },
  { value: 5, label: "Strongly Agree", color: "hover:border-teal-400 hover:bg-teal-50" }
];

export default function Assessment() {
  const [, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useReactState(1);
  const [answers, setAnswers] = useReactState<Record<number, number>>({});
  const [isAnimating, setIsAnimating] = useReactState(false);

  const progress = (currentPage / TOTAL_PAGES) * 100;
  
  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const currentPageQuestions = rawQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const handleOptionSelect = (questionIndex: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const isPageComplete = () => {
    for (let i = 0; i < currentPageQuestions.length; i++) {
      if (!answers[startIndex + i]) return false;
    }
    return true;
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
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 py-16 px-6">
        <div className={`container mx-auto max-w-3xl transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          
          <div className="space-y-12 mb-16">
            {currentPageQuestions.map((question, idx) => {
              const globalIdx = startIndex + idx;
              return (
                <div key={globalIdx} className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-bold text-gray-300 tabular-nums">{(globalIdx + 1).toString().padStart(2, '0')}</span>
                    <h2 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900">
                      {question}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {options.map((option) => {
                      const isSelected = answers[globalIdx] === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => handleOptionSelect(globalIdx, option.value)}
                          className={`
                            px-4 py-3 rounded-xl border-2 text-center transition-all duration-200 text-xs font-bold uppercase tracking-tight
                            ${isSelected 
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

          {/* Navigation Controls */}
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