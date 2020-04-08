document.addEventListener("DOMContentLoaded", function() {
    
    var time_flip = document.getElementById("switch");
 
    time_flip.onclick = function() {
 
        var status = document.getElementById("status");
 
        if (time_flip.classList.contains("night")) {
            setStyleSheet("");
            time_flip.setAttribute("class", "day");
            status.innerHTML = status.innerHTML.replace("night", "day");
        }
        else {
            setStyleSheet("css/location3_night.css");
            time_flip.setAttribute("class", "night");
            status.innerHTML = status.innerHTML.replace("day", "night");
        }
 
    }
 
    function setStyleSheet(url) {
        var stylesheet = document.getElementById("style-night");
        stylesheet.setAttribute("href", url);
    }
 
});