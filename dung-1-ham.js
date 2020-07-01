function convert() {
    var tien = document.getElementById("amount").value;
    var tien1 = parseFloat(tien);
    var nuoc1 = document.getElementById("country1").value;
    var nuoc2 = document.getElementById("country2").value;


    if (nuoc1 == nuoc2) {
        alert(tien1);
        return tien1;


    }
    if (nuoc1 == "VND" && nuoc2 == "USD") {
        tien1 = tien1 / 23000;
        alert(tien1);
        return tien1;


    }
    if (nuoc1 == "USD" && nuoc2 == "VND") {
        tien1 = tien1 * 23000;

    }
    alert(tien1);
    return tien1;

}

