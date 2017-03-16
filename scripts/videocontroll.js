function playVideo() {
    var starttime = 2;  // start at 2 seconds
    var endtime = 4;    // stop at 4 seconds

    var video = document.getElementById('player1');

    //handler should be bound first
    video.addEventListener("timeupdate", function() {
       if (this.currentTime >= endtime) {
            this.pause();
        }
    }, false);

    //suppose that video src has been already set properly
    video.load();
    video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
    try {
        video.currentTime = starttime;
    } catch (ex) {
        //handle exceptions here
    }
}