// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
//my work sarted
function syllabus() {
    location.href = "syllabus.html";
}

function spl() {
    location.href = "splcontent.html";
}

function ece() {
    location.href = "ece.html";
}

function cal() {
    location.href = "cal.html";
}
function cal2() {
    location.href = "cal2.html";
}

function phy() {
    location.href = "phy.html";
}
function qb() {
    location.href = "qb.html";
}
function qb2() {
    location.href = "qb2.html";
}
function app() {
    location.href = "https://drive.google.com/file/d/11kB96ID0WPRXEGvlgjCDezggbc6_EGva/view?usp=sharing";
}
function splchapter() {
    location.href = "https://drive.google.com/file/d/1V1yXr4EwV0a7VE44g794eroKZu579iRw/view?usp=sharing";
}
