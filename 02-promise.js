// create promise

function buatKopi() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const mesinSiapDigunakan = true;
      if (mesinSiapDigunakan) {
        resolve('kopi berhasil dibuat');
      } else {
        reject('tidak bisa membuat kopi, mesin rusak');
      }
    }, 2000);
  });
}

const kopi = buatKopi();
console.log(kopi);
