
function chuyendoi() {
    var tien = document.getElementById("amount").value;
    var nuoc1 = document.getElementById("country1").value;
    var nuoc2 = document.getElementById("country2").value;
    var xong = convert(tien, nuoc1, nuoc2);

    alert(xong);
}






function convert(tien,nuoc1,nuoc2){
      var result = tien;
    if (nuoc1 == nuoc2){

        return tien;
    }
    if (nuoc1 == "VND" && nuoc2 == "USD"){
        result = (tien * 0.0000429611);

    }
    if (nuoc1 == "USD" && nuoc2 == "VND"){
        result = (tien * 23296.86);
    }
    return result;
}





