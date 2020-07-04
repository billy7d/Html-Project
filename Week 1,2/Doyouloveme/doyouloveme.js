var width = window.innerWidth;
var height = window.innerHeight;

function yes() {
    alert("<3");

}
function no() {
    var randomwidth = Math.floor((Math.random() * width));
    var randomheight = Math.floor((Math.random() * height));

    document.getElementById("nope").style.left = randomwidth + "px";

    document.getElementById("nope").style.top = randomheight + "px";
    
}


