let vatly = prompt("nhap diem mon Vat ly");
let hoahoc = prompt("nhap diem mon Hoa hoc");
let sinhhoc = prompt("nhap diem mon Sinh hoc");

let v = parseFloat(vatly);
let h = parseFloat(hoahoc);
let s = parseFloat(sinhhoc);



document.write("tong diem cua 3 mon la: " + (v + h + s));
document.write("<br/>");
document.write("tong diem trung binh la: " + [(v + h + s)/3]);
