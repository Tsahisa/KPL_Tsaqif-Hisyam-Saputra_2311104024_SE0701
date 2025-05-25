import readline from "readline";
import CovidConfig from "./CovidConfig.js";

// Inisialisasi interface untuk input dari user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk tanya user secara async
function tanya(pertanyaan) {
  return new Promise((resolve) => rl.question(pertanyaan, resolve));
}

async function main() {
  // Inisialisasi class config
  const config = new CovidConfig();

  // Contoh: ubah satuan suhu dulu (bisa dikomentari jika tidak ingin mengubah)
  config.UbahSatuan(); // Ini akan toggle celcius ↔ fahrenheit

  const satuan = config.config.satuan_suhu;
  const batasHari = config.config.batas_hari_deman;
  const pesanDiterima = config.config.pesan_diterima;
  const pesanDitolak = config.config.pesan_ditolak;

  // Input dari user
  const suhuInput = await tanya(`Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `);
  const hariInput = await tanya("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ");

  rl.close(); // Tutup input setelah selesai

  const suhu = parseFloat(suhuInput);
  const hariDemam = parseInt(hariInput);

  let suhuNormal = false;

  if (satuan === "celcius") {
    suhuNormal = suhu >= 36.5 && suhu <= 37.5;
  } else if (satuan === "fahrenheit") {
    suhuNormal = suhu >= 97.7 && suhu <= 99.5;
  }

  const gejalaAman = hariDemam < batasHari;

  if (suhuNormal && gejalaAman) {
    console.log(pesanDiterima);
  } else {
    console.log(pesanDitolak);
  }
}

main();
