var page = 0;
var pages = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
"use strict";
var backgrounds = ["url(./assets/SunMoon01.png)", "url(./assets/SunMoon02.png)", "url(./assets/SunMoon02.png)", "url(./assets/SunMoon02.png)", "url(./assets/SunMoon05.png)", "url(./assets/SunMoon05.png)", "url(./assets/SunMoon07.png)", "url(./assets/SunMoon08.png)", "url(./assets/SunMoon09.png)", "url(./assets/SunMoon10.png)"]
var audioBookList = ["./assets/one.mp3", "./assets/two.mp3", "./assets/three.mp3", "./assets/four.mp3", "./assets/five.mp3", "./assets/six.mp3", "./assets/seven.mp3", "./assets/eight.mp3", "./assets/nine.mp3", "./assets/ten.mp3"]
var infoAudio = new Audio("./assets/info.mp3");
var audioBook = new Audio(audioBookList[0]);

function init() {
    page = 0;
    
    document.body.style.backgroundImage = backgrounds[page];
    
    document.getElementById("currentPage").innerHTML = "0" + (page + 1) + " / 10";
    document.getElementById(pages[0]).style.display = "block";
}

function prev() {
    mediaStop();
    infoClose();
    if (page === 0) {
        alert('첫 페이지입니다.');
    } else {
        document.getElementById(pages[page--]).style.display = "none";
        document.getElementById(pages[page]).style.display = "block";
        document.body.style.backgroundImage = backgrounds[page];
        if (page < 9) {
            document.getElementById("currentPage").innerHTML = "0" + (page + 1) + " / 10";
        } else {
            document.getElementById("currentPage").innerHTML = (page + 1) + " / 10";
        }
    }
}

function next() {
    mediaStop();
    infoClose();
    if (page === 9) {
        alert('마지막 페이지입니다.');
    } else {
        document.getElementById(pages[page++]).style.display = "none";
        document.getElementById(pages[page]).style.display = "block";
        document.body.style.backgroundImage = backgrounds[page];
        if (page < 9) {
            document.getElementById("currentPage").innerHTML = "0" + (page + 1) + " / 10";
        } else {
            document.getElementById("currentPage").innerHTML = (page + 1) + " / 10";
        }
    }
}

function infoClose() {
    infoStop();
    document.getElementById("info").style.display = "none";
    document.getElementsByClassName("menu")[0].style.display = "block";
    document.getElementById(pages[page]).style.display = "block";
}

function info() {
    mediaStop();
    document.getElementById(pages[page]).style.display = "none";
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementById("info").style.display = "block";
}

function infoPlay() {
    document.getElementById("infoPlayBtn").style.display = "none";
    document.getElementById("infoStopBtn").style.display = "inline";
    infoAudio.volume = 1.0;
    infoAudio.play();
    infoAudio.addEventListener('ended', (event) => {
        document.getElementById("infoPlayBtn").style.display = "inline";
        document.getElementById("infoStopBtn").style.display = "none";
    });
}

function infoStop() {
    document.getElementById("infoPlayBtn").style.display = "inline";
    document.getElementById("infoStopBtn").style.display = "none";
    infoAudio.pause();
    infoAudio.currentTime = 0;
}

function mediaPlay() {
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline";
    audioBook.src = audioBookList[page];
    audioBook.play();
    audioBook.addEventListener('ended', (event) => {
        document.getElementById("play").style.display = "inline";
        document.getElementById("stop").style.display = "none";
    });
}

function mediaStop() {
    document.getElementById("play").style.display = "inline";
    document.getElementById("stop").style.display = "none";
    audioBook.pause();
    audioBook.currentTime = 0;
}