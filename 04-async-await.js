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

async function minumKopi(mesin) {
  try {
    const data = await buatKopi(mesin);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('sudah selesai');
  }
}

minumKopi(true);
minumKopi(false);
