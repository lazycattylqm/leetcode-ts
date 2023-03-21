function convertTemperature (celsius: number): number[] {
  const v1 = celsius + 273.15;
  const v2 = celsius * 1.8 + 32;
  return [v1, v2];
};