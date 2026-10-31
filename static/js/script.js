function startSurprise() {

    const message = document.getElementById("message");

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
// Secret Message Function

function openSecret() {

    const secret = document.getElementById("secretMessage");

    if (secret.style.display === "none" ||
        secret.style.display === "") {

        secret.style.display = "block";

        secret.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
// Birthday Celebration Effect

function startCelebration() {

    const message = document.getElementById("birthdayMessage");
    const container = document.getElementById("confetti-container");

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    const colors = [
        "#ff69b4",
        "#ffd700",
        "#9d4edd",
        "#00e5ff",
        "#ff4500",
        "#ffffff"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}
const songs = [
    {
        title: "Birthday Piano Instrumental",
        file: "/static/music/birthday.mp3"
    },
    {
        title: "Until I Found You ❤️",
        file: "/static/music/romantic.mp3"
    }
];

let currentSong = 0;

const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const songTitle = document.getElementById("songTitle");
const musicStatus = document.getElementById("musicStatus");
const volumeControl = document.getElementById("volumeControl");

birthdayMusic.volume = 0.7;

function loadSong(index) {
    currentSong = index;

    birthdayMusic.src = songs[currentSong].file;
    songTitle.innerHTML = songs[currentSong].title;

    birthdayMusic.load();

    musicButton.innerHTML = "▶ Play";
    musicStatus.innerHTML = "Muziki umesimama";
}

function toggleMusic() {

    if (birthdayMusic.paused) {

        birthdayMusic.play()
            .then(() => {
                musicButton.innerHTML = "⏸ Pause";
                musicStatus.innerHTML = "🎵 Muziki unachezwa...";
            })
            .catch(() => {
                musicStatus.innerHTML =
                    "Imeshindikana kucheza. Hakikisha faili lipo.";
            });

    } else {

        birthdayMusic.pause();

        musicButton.innerHTML = "▶ Play";
        musicStatus.innerHTML = "Muziki umesimama";
    }
}

function nextSong() {

    let wasPlaying = !birthdayMusic.paused;

    currentSong = (currentSong + 1) % songs.length;

    loadSong(currentSong);

    if (wasPlaying) {
        toggleMusic();
    }
}

function previousSong() {

    let wasPlaying = !birthdayMusic.paused;

    currentSong = (currentSong - 1 + songs.length) % songs.length;

    loadSong(currentSong);

    if (wasPlaying) {
        toggleMusic();
    }
}

birthdayMusic.addEventListener("ended", function() {

    nextSong();

});

volumeControl.addEventListener("input", function() {

    birthdayMusic.volume = this.value;

});

loadSong(0);
