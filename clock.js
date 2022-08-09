
let giris = prompt("Lütfen adınızı giriniz : ")
let cıkıs = document.getElementById(`myName`)
cıkıs.innerHTML = giris


let now = new Date("2022-7-09");
let saat=document.getElementById(`tarih`)
saat.innerHTML=(now.toDateString())
