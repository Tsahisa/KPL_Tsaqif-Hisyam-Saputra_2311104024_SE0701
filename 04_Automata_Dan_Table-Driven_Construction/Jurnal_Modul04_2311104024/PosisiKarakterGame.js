class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    tekanTombolS() {
        console.log("Tombol arah bawah ditekan");
        if (this.state === "Berdiri") {
            this.state = "Jongkok";
        } else if (this.state === "Jongkok") {
            this.state = "Tengkurap";
        }
    }

    tekanTombolW() {
        console.log("Tombol arah atas ditekan");
        if (this.state === "Jongkok") {
            this.state = "Berdiri";
        } else if (this.state === "Berdiri") {
            this.state = "Terbang";
        }
    }

    getState() {
        return this.state;
    }
}

// Simulasi penggunaan
const karakter = new PosisiKarakterGame();
console.log("State awal:", karakter.getState());

karakter.tekanTombolS(); 
console.log("State sekarang:", karakter.getState());

karakter.tekanTombolW(); 
console.log("State sekarang:", karakter.getState());