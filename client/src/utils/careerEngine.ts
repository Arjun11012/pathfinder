import { careers } from '../data/careers';

export const getCareerMatches = (results: any) => {
  return careers.map(career => {
    let interestScore = 0;
    let weightSum = 0;

    Object.entries(career.interestWeights).forEach(([dim, weight]: [string, any]) => {
      const userScore = results.interest[dim] || 0;
      interestScore += userScore * weight;
      weightSum += weight;
    });

    let finalScore = weightSum > 0 ? interestScore / weightSum : 0;

    career.requiredStrengths.forEach(strength => {
      const strengthScore = results.strength[strength] || 0;
      if (strengthScore > 70) {
        finalScore += 5; // Bonus for high matching strength
      }
    });

    return {
      ...career,
      matchPercentage: Math.min(Math.round(finalScore), 100)
    };
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);
};
