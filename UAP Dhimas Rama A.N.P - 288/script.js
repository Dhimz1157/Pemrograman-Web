function total() {
    var kode = document.getElementById("kode").value;
    var banyak = document.getElementById("banyak").value;


    var harga = 0;
    switch (kode) {
        case "001":
            harga = 10000;
            break;
        case "002":
            harga = 20000;
            break;
        case "003":
            harga = 30000;
            break;
        default:
            alert("Invalid Kode");
            return;
    }

    var total = harga * banyak;
    alert("Total Pembayaran anda: " + total);

    var inputUang = prompt("Masukkan jumlah uang Anda:");
    if (isNaN(inputUang)) {
        alert("Invalid input for jumlah uang");
        return;
    }

    
    var kembalian = inputUang - total;


    if (kembalian >= 0) {
        alert("Kembalian Anda: " + kembalian);
    } else {
        alert("Jumlah uang Anda tidak mencukupi");
    }

}
