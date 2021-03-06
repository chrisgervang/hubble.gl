export const nearestEven = (num, decimalPlaces = 3) => {
  const factorTen = Math.pow(10, decimalPlaces);
  num = num * factorTen;
  num = 2 * Math.round(num / 2);
  return num / factorTen;
};
