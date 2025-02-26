/**
 * Generates an array of numbers with a normal distribution.
 * @param mean - The mean value (expected value).
 * @param stdDev - The standard deviation.
 * @param count - The number of values to generate.
 * @returns An array of numbers with a normal distribution.
 */
export const generateNormalDistributionData = (mean: number, stdDev: number, count: number): number[] => {
  const data: number[] = [];

  for (let i = 0; i < count; i++) {
    let randomValue1 = 0;
    let randomValue2 = 0;

    // Generation of two random numbers in the range (0, 1)
    while (randomValue1 === 0) randomValue1 = Math.random();
    while (randomValue2 === 0) randomValue2 = Math.random();

    // Transformation of random numbers into a normal distribution (Box-Muller method)
    const normalRandomValue =
      Math.sqrt(-2.0 * Math.log(randomValue1)) * Math.cos(2.0 * Math.PI * randomValue2);

    // Scaling the value to the desired mean and standard deviation
    const scaledValue = normalRandomValue * stdDev + mean;

    const roundedValue = parseFloat(scaledValue.toFixed(1));

    data.push(roundedValue);
  }

  return data;
};

/**
 * Generates an array of random labels for charts.
 * @param count - The number of labels.
 * @returns An array of string labels.
 */
export const generateRandomLabels = (count: number): string[] => {
  return Array.from({ length: count }, (_, index) => `Label ${index + 1}`);
};
