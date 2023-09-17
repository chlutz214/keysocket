keySocket.init(
    "rumble",
    {
        "play-pause": function () {
            var player = document.querySelector("video");
            if (player) {
                player.paused ? player.play() : player.pause();
            }
        },
        "stop": function () {
            var player = document.querySelector("video");
            if (player && !player.paused) {
                player.pause();
            }
        },
        // next is omitted
        // prev is ommitted
    }
);