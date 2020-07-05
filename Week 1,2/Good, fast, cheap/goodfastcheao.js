function click() {
    var a = document.getElementById("good").checked;
    var b = document.getElementById("fast").checked;
    var c = document.getElementById("cheap").checked;

    if ( a == true && b == true){
        c == false;
    } else if (a == true && c == true){
        b == false;
    } else if (b == true && c == true) {
        a == false;
    }

}