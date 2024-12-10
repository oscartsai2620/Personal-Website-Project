const ThemeButton = document.getElementById('toggle-theme');
// ThemeButton.style.display = "block";

ThemeButton.onclick = function() {
    var styleElement = document.getElementById("mainStyleSheet");
    var currentStyle = styleElement.getAttribute("href");
    var newStyle;
    if(currentStyle === "dark.css") {
        newStyle = "p1style.css";
    }else{
        newStyle = "dark.css";
    }
    styleElement.setAttribute("href", newStyle);
    localStorage.setItem("stylesheet", newStyle);
};

window.onload = function(){
    var savedStyle = localStorage.getItem("stylesheet");
    var styleElement = document.getElementById("mainStyleSheet");
    if(savedStyle){
        styleElement.setAttribute("href", savedStyle);
    }
}
