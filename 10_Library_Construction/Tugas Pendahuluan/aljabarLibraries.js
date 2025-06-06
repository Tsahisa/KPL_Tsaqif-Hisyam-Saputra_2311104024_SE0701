const AljabarLibraries = {
  // Mencari akar-akar dari persamaan kuadrat ax^2 + bx + c = 0
  AkarPersamaanKuadrat: (persamaan) => {
    let a = persamaan[0];
    let b = persamaan[1];
    let c = persamaan[2];
    let diskriminan = b * b - 4 * a * c;

    if (diskriminan < 0) {
      return ["Akar imajiner"]; // karena diskriminan negatif
    } else {
      let akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
      let akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
      return [akar1, akar2];
    }
  },

  // Menghitung hasil kuadrat dari persamaan linear ax + b
  HasilKuadrat: (persamaan) => {
    let a = persamaan[0];
    let b = persamaan[1];
    let hasilA = a * a;
    let hasilB = 2 * a * b;
    let hasilC = b * b;

    return [hasilA, hasilB, hasilC];
  }
};

export default AljabarLibraries;