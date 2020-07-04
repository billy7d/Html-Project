function phepcong() {
    let a1 = document.getElementById("so1").value;
    let b1 = document.getElementById("so2").value;
    let a2 = parseFloat(a1);
    let b2 = parseFloat(b1);
    let c = a2 + b2;
    document.getElementById("result").innerHTML = c;
}

function pheptru() {
    let a1 = document.getElementById("so1").value;
    let b1 = document.getElementById("so2").value;
    let a2 = parseFloat(a1);
    let b2 = parseFloat(b1);
    let c = a2 - b2;
    document.getElementById("result").innerHTML = c;
}

function phepnhan() {
    let a1 = document.getElementById("so1").value;
    let b1 = document.getElementById("so2").value;
    let a2 = parseFloat(a1);
    let b2 = parseFloat(b1);
    let c = a2 * b2;
    document.getElementById("result").innerHTML = c;
}

function phepchia() {
    let a1 = document.getElementById("so1").value;
    let b1 = document.getElementById("so2").value;
    let a2 = parseFloat(a1);
    let b2 = parseFloat(b1);
    let c = a2 / b2;
    document.getElementById("result").innerHTML = c;
}