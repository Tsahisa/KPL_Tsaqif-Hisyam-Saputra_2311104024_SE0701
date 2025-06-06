const readline = require("readline");

class KodeBuah {
  constructor() {
    // Tabel data buah -> kode buah
    this.dataKodeBuah = new Map([
      ["Apel", "A00"],
      ["Aprikot", "B00"],
      ["Alpukat", "C00"],
      ["Pisang", "D00"],
      ["Paprika", "E00"],
      ["Blackberry", "F00"],
      ["Ceri", "H00"],
      ["Kelapa", "I00"],
      ["Jagung", "J00"],
      ["Kurma", "K00"],
      ["Durian", "L00"],
      ["Anggur", "M00"],
      ["Melon", "N00"],
      ["Semangka", "O00"],
    ]);
  }

  // Method untuk mendapatkan kode buah
  getKodeBuah(namaBuah) {
    return this.dataKodeBuah.get(namaBuah) || "Kode buah tidak ditemukan";
  }

  tampilkanDaftarBuah() {
    console.log("Daftar Buah yang Tersedia:");
    for (const [namaBuah, kodeBuah] of this.dataKodeBuah) {
      console.log(`${namaBuah} -> ${kodeBuah}`);
    }
  }

  async run() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.tampilkanDaftarBuah();

    const askQuestion = (question) => {
      return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer.trim()));
      });
    };

    let namaBuah;
    do {
      namaBuah = await askQuestion("Masukkan nama buah (atau ketik 'exit' untuk keluar): ");
      if (namaBuah.toLowerCase() === "exit") {
        console.log("Terima kasih telah menggunakan program ini!");
        break;
      }

      const kodeBuah = this.getKodeBuah(namaBuah);
      if (kodeBuah === "Kode buah tidak ditemukan") {
        console.log("Nama buah tidak valid. Silakan coba lagi.");
      } else {
        console.log(`Kode Buah untuk ${namaBuah}: ${kodeBuah}`);
        break;
      }
    } while (true);

    rl.close();
  }
}

if (require.main === module) {
  const kb = new KodeBuah();
  kb.run();
}

module.exports = KodeBuah;