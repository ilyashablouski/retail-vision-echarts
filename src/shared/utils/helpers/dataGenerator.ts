/**
 * Генерирует массив чисел с нормальным распределением.
 * @param mean - Среднее значение (математическое ожидание).
 * @param stdDev - Стандартное отклонение.
 * @param count - Количество генерируемых значений.
 * @returns Массив чисел с нормальным распределением.
 */
export const generateNormalDistributionData = (mean: number, stdDev: number, count: number): number[] => {
  const data: number[] = [];

  for (let i = 0; i < count; i++) {
    let randomValue1 = 0;
    let randomValue2 = 0;

    // Генерация двух случайных чисел в диапазоне (0, 1)
    while (randomValue1 === 0) randomValue1 = Math.random();
    while (randomValue2 === 0) randomValue2 = Math.random();

    // Преобразование случайных чисел в нормальное распределение (метод Бокса-Мюллера)
    const normalRandomValue =
      Math.sqrt(-2.0 * Math.log(randomValue1)) * Math.cos(2.0 * Math.PI * randomValue2);

    // Масштабирование значения до нужного среднего и стандартного отклонения
    const scaledValue = normalRandomValue * stdDev + mean;

    data.push(scaledValue);
  }

  return data;
};

/**
 * Генерирует массив случайных меток для графиков.
 * @param count - Количество меток.
 * @returns Массив строковых меток.
 */
export const generateRandomLabels = (count: number): string[] => {
  return Array.from({ length: count }, (_, index) => `Label ${index + 1}`);
};
