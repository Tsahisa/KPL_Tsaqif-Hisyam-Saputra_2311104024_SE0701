export function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

// Hanya definisikan fungsi tampilkanHasil jika di browser
if (typeof window !== "undefined") {
  window.tampilkanHasil = function () {
    const input = document.getElementById("inputNumber").value;
    const angka = parseInt(input);
    const hasil = CariTandaBilangan(angka);
    document.getElementById("outputLabel").textContent = hasil;
  };
}