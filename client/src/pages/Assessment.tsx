import { useState } from "wouter/preact";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState as useReactState, useEffect } from "react";

const TOTAL_QUESTIONS = 12;

const questions = [
  "I enjoy organizing and analyzing complex data.",
  "I prefer working in a team rather than independently.",
  "I am comfortable taking charge in group situations.",
  "I enjoy creative activities like art, music, or writing.",
  "I like working with my hands to build or fix things.",
  "I prefer structured environments with clear rules.",
  "I find it easy to empathize with others' problems.",
  "I am interested in scientific theories and research.",
  "I enjoy persuading or influencing others.",
  "I like keeping detailed records and schedules.",
  "I prefer to work on one task until completion.",
  "I enjoy fast-paced, unpredictable work environments."
];

const options = [
  { value: 1, label: "Strongly Disagree", color: "hover:border-rose-400 hover:bg-rose-50" },
  { value: 2, label: "Disagree", color: "hover:border-orange-300 hover:bg-orange-50" },
  { value: 3, label: "Neutral", color: "hover:border-slate-300 hover:bg-slate-50" },
  { value: 4, label: "Agree", color: "hover:border-emerald-300 hover:bg-emerald-50" },
  { value: 5, label: "Strongly Agree", color: "hover:border-teal-400 hover:bg-teal-50" }
];

export default function Assessment() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useReactState(1);
  const [answers, setAnswers] = useReactState<Record<number, number>>({});
  const [isAnimating, setIsAnimating] = useReactState(false);

  const progress = (currentStep / TOTAL_QUESTIONS) * 100;
  const currentQuestion = questions[currentStep - 1];

  const handleOptionSelect = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentStep]: value }));
    
    // Auto advance after short delay
    setTimeout(() => {
      handleNext();
    }, 400);
  };

  const handleNext = () => {
    if (currentStep < TOTAL_QUESTIONS) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      // Go to results
      setLocation("/dashboard");
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-lg hidden sm:inline-block">PathFinder</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4 flex-1 max-w-md mx-auto px-4">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Question {currentStep} of {TOTAL_QUESTIONS}
            </span>
            <Progress value={progress} className="h-2 w-full" />
            <span className="text-sm font-bold text-primary whitespace-nowrap">
              {Math.round(progress)}%
            </span>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="text-muted-foreground">
            Exit
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl relative">
          
          {/* Question Card */}
          <Card className={`border-none shadow-xl shadow-slate-200/50 transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
              
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-12 leading-relaxed">
                "{currentQuestion}"
              </h2>

              <div className="w-full flex flex-col gap-3">
                {options.map((option) => {
                  const isSelected = answers[currentStep] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`
                        w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group
                        ${isSelected 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : `border-slate-100 bg-white text-slate-600 ${option.color}`
                        }
                      `}
                    >
                      <span className={`font-medium ${isSelected ? 'font-bold' : ''}`}>
                        {option.label}
                      </span>
                      
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors
                        ${isSelected 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-slate-200 group-hover:border-current'
                        }
                      `}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button 
              variant="ghost" 
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Previous
            </Button>

            <Button 
              onClick={handleNext}
              disabled={!answers[currentStep]}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
            >
              {currentStep === TOTAL_QUESTIONS ? 'Finish' : 'Next'} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
        </div>
      </main>
    </div>
  );
}