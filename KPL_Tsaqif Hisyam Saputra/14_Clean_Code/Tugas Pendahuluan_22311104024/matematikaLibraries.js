/**
 * Library matematika custom untuk operasi dasar.
 */
const MatematikaLibraries = {
  /**
   * Menghitung Faktor Persekutuan Terbesar (FPB) dari dua bilangan.
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  findFPB: (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  /**
   * Menghitung Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan.
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  findKPK: (a, b) => {
    return Math.abs(a * b) / MatematikaLibraries.findFPB(a, b);
  },

  /**
   * Menghitung turunan dari persamaan polinomial.
   * @param {number[]} equation
   * @returns {string}
   */
  deriveEquation: (equation) => {
    let result = '';
    let exponent = equation.length - 1;

    for (let i = 0; i < equation.length; i++) {
      if (exponent === 0) break;

      const coefficient = equation[i] * exponent;
      if (coefficient === 0) {
        exponent--;
        continue;
      }

      result += (coefficient > 0 && result ? ' + ' : coefficient < 0 ? ' - ' : '') +
        (Math.abs(coefficient) !== 1 || exponent === 1 ? Math.abs(coefficient) : '') +
        (exponent > 1 ? `x${exponent}` : 'x');

      exponent--;
    }

    return result || '0';
  },

  /**
   * Menghitung integral dari persamaan polinomial.
   * @param {number[]} equation
   * @returns {string}
   */
  integrateEquation: (equation) => {
    let result = '';
    let exponent = equation.length - 1;

    for (let i = 0; i < equation.length; i++) {
      const newExponent = exponent + 1;
      const coefficient = equation[i] / newExponent;

      if (coefficient === 0) {
        exponent--;
        continue;
      }

      result += (coefficient > 0 && result ? ' + ' : coefficient < 0 ? ' - ' : '') +
        (Math.abs(coefficient) !== 1 || newExponent === 0 ? Math.abs(coefficient) : '') +
        (newExponent > 0 ? `x${newExponent}` : '');

      exponent--;
    }

    result += ' + C';
    return result;
  }
};

export default MatematikaLibraries;