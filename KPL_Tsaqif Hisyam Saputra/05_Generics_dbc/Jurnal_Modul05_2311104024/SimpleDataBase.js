class SimpleDataBase {
    storedData;
    inputDates;

    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }
    
    printAllData() {
        for (let i = 0; i < this.storedData.length; i++) {
            const data = this.storedData[i];
            const date = this.inputDates[i];
            console.log(`Data ${i + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${date.toUTCString()}`);
        }
    }
}

function main() {
    const db = new SimpleDataBase();
    
    db.addNewData("12");  
    db.addNewData("34");  
    db.addNewData("56");  
    
    db.printAllData();
}

main();