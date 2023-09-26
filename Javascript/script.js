// conditional

// let lapar = true

// if (lapar) {
//     console.log("Makan");
// } else {
//     console.log("jangan makan");
// }

// -------------------------------
// jika hijau, maka jalan
// jika kuning, maka hati-hati
// jika merah, maka berhenti

// let lampu = prompt()
// lampu = lampu.toLowerCase()

// if (lampu == 'hijau') {
//     console.log("GASS NGAB!!");
//     alert("OKE GASS NGAB!!");

// } else if (lampu == 'kuning') {
//     console.log("Hati hati coy");

// } else if (lampu == 'merah') {
//     console.log(" Remm coyy!! ")

// } else {
//     console.log("Lampu rusak njir");
//     console.log("Pelan pelan pak supir...");
//     console.log("Ada janda, xixixi...")
// }

// nilai A 90-100
// nilai B 80-89
// nilai C 70-79
// nilai D 0-69

let nilai = prompt("Masukan nilai anda: ")

if (nilai == 100 || nilai >= 90) {
    console.log("Nilai: A");
    alert("Nilai anda adalah A");

} else if (nilai >= 80) {
    console.log("Nilai: B");
    alert("Nilai anda adalah B");

} else if (nilai >= 70) {
    console.log("Nilai: C");
    alert("Nilai anda adalah C");
} else {
    console.log("Nilai: D");
    alert("Nilai anda adalah D");
}
