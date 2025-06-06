const MatematikaLibraries = {
  // Mencari Faktor Persekutuan Terbesar
  FPB: (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  // Mencari Kelipatan Persekutuan Terkecil
  KPK: (a, b) => {
    return Math.abs(a * b) / MatematikaLibraries.FPB(a, b);
  },

  // Menghitung Turunan Persamaan Sederhana
  Turunan: (persamaan) => {
    let result = '';
    let pangkat = persamaan.length - 1;

    for (let i = 0; i < persamaan.length; i++) {
      if (pangkat === 0) break;
      let coef = persamaan[i] * pangkat;
      if (coef === 0) {
        pangkat--;
        continue;
      }
      result += (coef > 0 && result ? ' + ' : coef < 0 ? ' - ' : '') + (Math.abs(coef) !== 1 || pangkat === 1 ? Math.abs(coef) : '') + (pangkat > 1 ? `x${pangkat}` : 'x');
      pangkat--;
    }
    return result || '0';
  },

  // Menghitung Integral Persamaan Sederhana
  Integral: (persamaan) => {
    let result = '';
    let pangkat = persamaan.length - 1;

    for (let i = 0; i < persamaan.length; i++) {
      let newPangkat = pangkat + 1;
      let coef = persamaan[i] / newPangkat;
      if (coef === 0) {
        pangkat--;
        continue;
      }
      result += (coef > 0 && result ? ' + ' : coef < 0 ? ' - ' : '') + (Math.abs(coef) !== 1 || newPangkat === 0 ? Math.abs(coef) : '') + (newPangkat > 0 ? `x${newPangkat}` : '');
      pangkat--;
    }
    result += ' + C';
    return result;
  }
};

export default MatematikaLibraries;