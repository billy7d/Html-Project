var username = prompt("Nhap username");

if (username === "admin") {
    var password = prompt("Nhap mat khau");
        if (password === "the master"){
        alert("Welcome!!");
        }   else if (password === "null"){
                alert("Canceled");
            }       alert("Wrong password");
} else if(username === "null"){
    alert("Canceled");
}       else {
            alert("I don't know you");
        }




