//Contoh simpel const let di coffeshop
const hargaKopi = 15000;
let jumlahBeli = 4

let totalAwal = hargaKopi * jumlahBeli;
console.log('Total belaja awal Rp. ' + totalAwal);

//Membuat logika diskon dengan IF
let diskon = 0;
if (totalAwal >= 50000){
    diskon = totalAwal * 0.10;
    console.log ('Selamat! Anda mendapatkan diskon : Rp. ' + diskon);
} else {
    console.log ("Maaf, belanja anda belum mencapai batas diskon");
}

//Menghitung total akhir
let totalAkhir = totalAwal - diskon;
console.log ('Total yang harus di bayar : Rp. ' + totalAkhir)

//Mencoba disatuin semua kode

function hitungTotalBelanja(jumlahKopi) { 
    const hargaKopi = 15000;
    let totalAwal = hargaKopi * jumlahKopi;
    let diskon = 0; 

    console.log("---Struk Belanja---");
    console.log("Jumlah kopi : " + jumlahKopi);
    console.log("Total Awal : Rp." + totalAwal);

    if (totalAwal >= 50000);{
        diskon = totalAwal * 0.10;
        console.log ('Dislon 10% Rp. ' + diskon);
    }

    let totalAkhir = totalAwal - diskon;
    console.log('Total bayar : Rp.' + totalAkhir);
    console.log('---------------------');
}

hitungTotalBelanja(8);
hitungTotalBelanja(5);  