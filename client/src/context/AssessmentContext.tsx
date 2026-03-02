import React, { createContext, useContext, useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { calculateResults } from '../utils/scoringEngine';

const AssessmentContext = createContext<any>(null);

export const AssessmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [answers, setAnswers] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('assessment_answers');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('assessment_answers', JSON.stringify(answers));
  }, [answers]);

  const setAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const getResults = () => {
    return calculateResults(answers, questions);
  };

  const resetAssessment = () => {
    setAnswers({});
    localStorage.removeItem('assessment_answers');
  };

  return (
    <AssessmentContext.Provider value={{ answers, setAnswer, getResults, resetAssessment }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => useContext(AssessmentContext);
