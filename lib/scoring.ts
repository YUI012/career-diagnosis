export type ResultType = "SES" | "SIER" | "IN_HOUSE";

export function calcResult(answers: string[]): ResultType {
  const score = {
    SES: 0,
    SIER: 0,
    IN_HOUSE: 0,
  };

  answers.forEach((a) => {
    if (a === "SES") score.SES++;
    if (a === "SIER") score.SIER++;
    if (a === "IN_HOUSE") score.IN_HOUSE++;
  });

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0] as ResultType;
}