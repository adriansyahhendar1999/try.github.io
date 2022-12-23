alert('HAIIIII SELAMAT DATANG DI WEBSITEE YANG SANGAT SEDERHANA INI');
let nama = prompt('SEBELUM MASUK, MASUKKAN NAMAAA KAMUU DONGGG WKWK');
alert(' hallo ' + nama + ' semoga sukaaaaa yaaaaa sama web sederhanaa iniii ');
confirm('tapi beneran mau liat?')
alert('oke deh hihi')

function gamau(id) {
    var iyaa = document.getElementById("btn_iyaa ");
    var i = Math.floor(Math.random() * 600) + 1;
    var j = Math.floor(Math.random() * 100) + iyaa.offsetTop;

    id.style.left = i + "px ";
    id.style.top = j + "px ";
}