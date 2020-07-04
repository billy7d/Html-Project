function numb(comparenumb) {
   var savenumb = document.getElementById("display").value;
    switch (comparenumb) {
        case "0":
            document.getElementById("display").value =savenumb +=0;
            break;
        case "1":
            document.getElementById("display").value = savenumb +=1;
            break;
        case "2":
            document.getElementById("display").value = savenumb +=2;
            break;
        case "3":
            document.getElementById("display").value = savenumb +=3;
            break;
        case "4":
            document.getElementById("display").value = savenumb +=4;
            break;
        case "5":
            document.getElementById("display").value = savenumb +=5;
            break;
        case "6":
            document.getElementById("display").value = savenumb +=6;
            break;
        case "7":
            document.getElementById("display").value = savenumb +=7;
            break;
        case "8":
            document.getElementById("display").value = savenumb +=8;
            break;
        case "9":
            document.getElementById("display").value = savenumb +=9;
            break;
    }
}
function del() {
    document.getElementById("display").value = " ";

}
function ope(compareope) {
    switch (compareope) {
        case "+":
            document.getElementById("display").value += "+";
            break;
        case "-":
            document.getElementById("display").value += "-";
            break;
        case "*":
            document.getElementById("display").value += "*";
            break;
        case "/":
            document.getElementById("display").value += "/";
            break;
    }

}
function execute() {
    var bieuthuc = document.getElementById("display").value;
    var result = eval(bieuthuc);

    document.getElementById("display").value = result;
}