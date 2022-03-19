// Masalah fungsi asinkronus

function orderCoffee() {
  let coffee = null;
  console.log('sedang membuat kopi...');
  setTimeout(function () {
    coffee = 'kopi sudah jadi';
    console.log('kopi jadi');
  }, 5000);
  return coffee;
}

const kopi = orderCoffee();
console.log(kopi);
