let vatly = prompt("nhap diem mon Vat ly");
let hoahoc = prompt("nhap diem mon Hoa hoc");
let sinhhoc = prompt("nhap diem mon Sinh hoc");

let v = parseFloat(vatly);
let h = parseFloat(hoahoc);
let s = parseFloat(sinhhoc);

let tong = v + h + s;
let tb = (v+ h + s)/3;

document.write("tong diem cua 3 mon la: " + tong);
document.write("tong diem trung binh la: " + tb);
