class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        // Validate the input
        if (count > 0 && count <= 10000000) {
            this.playCount += count;
        } else {
            console.log("Invalid play count increment. Must be between 1 and 10,000,000.");
        }
    }

    printVideoDetails() {
        console.log("=== Video Details ===");
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
        console.log("====================");
    }
}

function main() {
    const namaPraktikan = "Tsaqif Hisyam Saputra"; 
    // Create video with specified title
    const video = new SayaTubeVideo(`Tutorial Design By Contract - ${namaPraktikan}`);
    
    // Increase play count with some values
    video.increasePlayCount(1000);
    video.increasePlayCount(500);
    video.increasePlayCount(10000001); // Should show invalid message
    
    video.printVideoDetails();
}


main();