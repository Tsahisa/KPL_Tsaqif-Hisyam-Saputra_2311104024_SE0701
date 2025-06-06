class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID 5-digit random
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
        console.log('-------------------------');
    }
}

class SayaTubeUser {
    constructor(username) {
        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.username = username;
        this.uploadedVideos = [];
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    AddVideo(video) {
        this.uploadedVideos.push(video);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
        console.log('=========================');
    }
}

// Program Utama
const user = new SayaTubeUser("Tsaqif Hisyam Saputra");

const videos = [
    "Review Film The Avengers oleh Tsaqif Hisyam Saputra",
    "Review Film Titanic oleh Tsaqif Hisyam Saputra",
    "Review Film Avatar oleh Tsaqif Hisyam Saputra",
    "Review Film Joker oleh Tsaqif Hisyam Saputra",
    "Review Film Spider-Man: No Way Home oleh Tsaqif Hisyam Saputra",
    "Review Film Dune oleh Tsaqif Hisyam Saputra",
    "Review Film Everything Everywhere All at Once oleh Tsaqif Hisyam Saputra",
    "Review Film Oppenheimer oleh Tsaqif Hisyam Saputra",
    "Review Film John Wick oleh Tsaqif Hisyam Saputra",
    "Review Film The Wolf of Wall Street oleh Tsaqif Hisyam Saputra"
];

// Tambahkan video ke user
videos.forEach(title => {
    let video = new SayaTubeVideo(title);
    video.IncreasePlayCount(Math.floor(Math.random() * 1000)); // Simulasi play count
    user.AddVideo(video);
});

// Print semua video yang diupload user
user.PrintAllVideoPlaycount();

// Print detail setiap video
user.uploadedVideos.forEach(video => video.PrintVideoDetails());

// Print total play count
console.log(`Total Play Count dari semua video: ${user.GetTotalVideoPlayCount()}`);
