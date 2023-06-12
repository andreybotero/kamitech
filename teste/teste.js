var i = 0;

function Open() {
    i ++;
    document.getElementById("header1").hidden = false;
    if (i > 1) {
        document.getElementById("header1").hidden = true;
        i = 0;
    }
}