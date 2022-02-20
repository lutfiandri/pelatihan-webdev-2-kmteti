// console.log('Hello World');

// VARIABLE DECLARATION ==================================
// let nama = 'lutfi';
// nama = 'andri';

// console.log(nama);

// const nama2 = 'yanto';
// nama2 = 'yanto2';

// TYPE CONVERSION =======================================
// const angka = '123';
// console.log(typeof angka);
// const angkaAsli = Number(angka);
// console.log(typeof angkaAsli);

// console.log(angka + 1);
// console.log(angkaAsli + 1);

// DYNAMIC TYPING ========================================
// let x = 123;
// x = 'sesuatu';

// COMPARISON ============================================
// console.log('5' === 5);

// BE CAREFUL WITH STRING ================================
// console.log(1 + 1);
// console.log(1 + '1');
// console.log('1' + 1 + 1);
// console.log(1 + 1 + '1');

// STRING LITERAL ========================================
// const nama = 'Lutfi';
// const umur = 19;

// const kalimatPerkenalan =
//   'Hai, aku ' + nama + '. Aku berumur ' + umur + ' tahun.';
// console.log(kalimatPerkenalan);

// const kalimatPerkenalan2 = `Hai, aku ${nama}. Aku berumur ${umur} tahun.`;
// console.log(kalimatPerkenalan2);

// FUNCTION ==============================================
// function sayHi() {
//   console.log('halo');
// }

// sayHi();

// const r1 = 10;
// const r2 = 20;

// const luasLingkaran1 = 3.14 * r1 * r1;
// const luasLingkaran2 = 3.14 * r2 * r1;

// console.log(luasLingkaran1);
// console.log(luasLingkaran2);

// function luasLingkaran(r) {
//   const luas = 3.1482 * r * r;
//   return luas;
// }

// const r1 = 10;
// const r2 = 20;

// const luas1 = luasLingkaran(r1);
// const luas2 = luasLingkaran(r2);

// console.log(luas1 + luas2);

// Arrow Function
// function luasPersegiPanjang(p, l) {
//   return p * l;
// }

// console.log(luasPersegiPanjang(10, 5));

// const luasPersegiPanjang = (p, l) => {
//   return p * l;
// };

// console.log(luasPersegiPanjang(10, 50));

// const luasPersegiPanjang = (p, l) => p * l;
// console.log(luasPersegiPanjang(10, 50));

// Anonymous Function
// (() => {
//   console.log('hai');
// })();

// ARRAY =====================================================
// const kumpulanNama = ['lutfi', 'andriyanto'];
// kumpulanNama.push('ichsan');
// kumpulanNama.pop();

// console.log(kumpulanNama);

// kumpulanNama.forEach((nama) => {
//   console.log(`halo ${nama}`);
// });

// const kumpulanNama2 = kumpulanNama.map((nama) => {
//   return `halo ${nama}`;
// });

// console.log(kumpulanNama2);

// const kumpulanAngka = [1, 2, 3, 4, 6, 8, 123, 5];
// const kumpulanGenap = kumpulanAngka.filter((angka) => {
//   return angka % 2 === 0;
// });

// console.log(kumpulanGenap);

// OBJECT =====================================================
// Object Literal
// const orang1 = {
//   nama: 'Lutfi',
//   umur: 19,
//   fruits: ['pepaya', 'jeruk'],
//   handphone: {
//     merk: 'xiaomi',
//     tipe: 'redmi 10',
//   },
// };

// console.log(orang1['nama']);
// console.log(orang1.nama);

// orang1.niu = 123456;
// orang1.nama = 'andri';

// console.log(orang1);

// console.log(orang1.fruits[1]);
// console.log(orang1.handphone.merk);

// Create Object with Function
// function buatOrang(nama, umur, fruits, merkHp, tipeHp) {
//   return {
//     nama: nama,
//     umur: umur,
//     fruits: fruits,
//     handphone: {
//       merk: merkHp,
//       tipe: tipeHp,
//     },
//   };
// }

// const orang1 = buatOrang('Lutfi', 19, ['jeruk', 'mangga'], 'samsung', 'a50');
// console.log(orang1);

// const orang2 = buatOrang('budi', 19, ['jeruk'], 'samsung', 'a30');
// console.log(orang2);

// STUDY CASE =======================================================
// Study Case 1
// const file = 'Tugas1_456370_Lutfi Andriyanto_ALIN.pdf';
// const fileObjectExpected = {
//   judul: 'Tugas1',
//   niu: 456370,
//   mahasiswa: 'Lutfi Andriyanto',
//   matkul: 'ALIN',
//   ext: 'pdf',
// };

// const fileArr = file.split('_');
// const arrMatkulExt = fileArr[3].split('.');
// console.log(fileArr);
// console.log(arrMatkulExt);

// const fileObject = {
//   judul: fileArr[0],
//   niu: Number(fileArr[1]),
//   mahasiswa: fileArr[2],
//   matkul: arrMatkulExt[0],
//   ext: arrMatkulExt[1],
// };

// console.log(fileObject);

// const createFileObject = (fileName) => {
//   const fileArr = fileName.split('_');
//   const arrMatkulExt = fileArr[3].split('.');

//   const fileObject = {
//     judul: fileArr[0],
//     niu: Number(fileArr[1]),
//     mahasiswa: fileArr[2],
//     matkul: arrMatkulExt[0],
//     ext: arrMatkulExt[1],
//   };

//   return fileObject;
// };

// const obj = createFileObject('Tugas1_456370_Lutfi Andriyanto_ALIN.pdf');
// console.log(obj);

// Study Case 2
// const tasks = [
//   'Tugas1_456370_Lutfi Andriyanto_ALIN.pdf',
//   'Tugas2_456370_Lutfi Andriyanto_ALIN.pdf',
//   'Tugas3_456370_Lutfi Andriyanto_ALIN.pdf',
//   'Tugas4_456370_Lutfi Andriyanto_ALIN.pdf',
//   'Tugas5_456370_Lutfi Andriyanto_ALIN.pdf',
// ];

// const taskObjects = tasks.map((task) => createFileObject(task));
// console.log(taskObjects);
