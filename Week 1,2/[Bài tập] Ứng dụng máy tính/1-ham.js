function nhannut(calMethod) {
    var a1 = document.getElementById("so1").value;
    var b1 = document.getElementById("so2").value;
    var a2 = parseFloat(a1);
    var b2 = parseFloat(b1);


    if (calMethod === "cong"){

        var c = a2 + b2;
        document.getElementById("raso").innerHTML = c;

    }
    if (calMethod === "tru"){

        var c = a2 - b2;
        document.getElementById("raso").innerHTML = c;

    }
    if (calMethod === "nhan"){

        var c = a2 * b2;
        document.getElementById("raso").innerHTML = c;

    }
    if (calMethod === "chia"){

        var c = a2 / b2;
        document.getElementById("raso").innerHTML = c;

    }
        return;


}