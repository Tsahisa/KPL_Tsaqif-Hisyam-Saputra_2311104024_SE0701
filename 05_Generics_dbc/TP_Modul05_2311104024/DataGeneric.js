class DataGeneric {
    constructor(data) {
        this.data = data;
    }
    PrintData() {
        console.log("Data yang tersimpan adalah: " + this.data);
    }
}

function main() {
    let stringData = new DataGeneric("Y");
    
    stringData.PrintData();
    
    let numberData = new DataGeneric(2311104024);
    numberData.PrintData();
}

main();