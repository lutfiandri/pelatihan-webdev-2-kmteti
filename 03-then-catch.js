function buatKopi(mesin) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const mesinSiapDigunakan = mesin;
      if (mesinSiapDigunakan) {
        resolve('kopi berhasil dibuat');
      } else {
        reject('tidak bisa membuat kopi, mesin rusak');
      }
    }, 2000);
  });
}

function minumKopi(mesin) {
  buatKopi(mesin)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('sudah selesai');
    });
}

minumKopi(true);
minumKopi(false);
