function menumobile() {
    var onoff = document.getElementById("button");
    var items = document.getElementsByClassName("item-mobile");
    
    if (onoff.innerHTML.trim() === "✕") { // isto o torna "ON"
        onoff.innerHTML = "☰"; // isto o torna "OFF"
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
    } else {
        onoff.innerHTML = "✕"; // volta para "ON"
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }
    }
}
