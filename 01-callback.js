// Solving dengan callback

function orderCoffee(callback) {
  let coffee = null;
  console.log('sedang membuat kopi...');
  setTimeout(function () {
    coffee = 'kopi kapal api';
    callback(coffee);
  }, 3000);
}

function minum(kopi) {
  console.log('minum ' + kopi);
}

orderCoffee(minum);

// Callback hell

// Misal kita ingin membuat kue:
// 1. Menyiapkan bahan
// 2. Membuat adonan
// 3. Memanggang adonan

// function buatKue(bahan) {
//   menyapkanBahan(bahan, function (takaran) {
//     membuatAdonan(takaran, function (adonan) {
//       memanggangAdonan(adonan, function (kue) {
//         console.log(kue);
//       });
//     });
//   });
// }

// // Penyelesaian dengan promise
// function buatKue(bahan) {
//   menyapkanBahan(bahan)
//     .then(membuatAdonan)
//     .then(memanggangAdonan)
//     .then(console.log);
// }
