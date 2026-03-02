export const calculateResults = (answers: Record<number, number>, questions: any[]) => {
  const scores: any = {
    interest: {},
    personality: {},
    strength: {},
    value: {}
  };

  const counts: any = {
    interest: {},
    personality: {},
    strength: {},
    value: {}
  };

  questions.forEach(q => {
    const answer = answers[q.id];
    if (answer) {
      if (!scores[q.dimensionType][q.dimension]) {
        scores[q.dimensionType][q.dimension] = 0;
        counts[q.dimensionType][q.dimension] = 0;
      }
      scores[q.dimensionType][q.dimension] += answer;
      counts[q.dimensionType][q.dimension] += 1;
    }
  });

  const normalized: any = {};
  Object.keys(scores).forEach(type => {
    normalized[type] = {};
    Object.keys(scores[type]).forEach(dim => {
      const maxScore = counts[type][dim] * 5;
      normalized[type][dim] = Math.round((scores[type][dim] / maxScore) * 100);
    });
  });

  return normalized;
};
