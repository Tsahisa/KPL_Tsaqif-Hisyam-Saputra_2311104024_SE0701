class KodePos {
    constructor() {
        this.kodePosTable = {
            "Batununggal": "40266",
            "Kujangsari": "40287",
            "Mengger": "40267",
            "Wates": "40256",
            "Cijaura": "40287",
            "Jatisari": "40286",
            "Margasari": "40286",
            "Sekejati": "40286",
            "Kebonwaru": "40272",
            "Maleer": "40274",
            "Samoja": "40273"
        };
    }

    getKodePos(kelurahan) {
        return this.kodePosTable[kelurahan] || "Kode pos tidak ditemukan";
    }
}

// Contoh penggunaan
const kodePos = new KodePos();
console.log("Kode Pos Batununggal: " + kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Kujangsari: " + kodePos.getKodePos("Kujangsari"));