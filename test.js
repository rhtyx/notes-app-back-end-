/* eslint-disable prefer-promise-reject-errors */
const checkStock = () => new Promise((resolve, reject) => {
  const coffeeBeans = 20;
  const water = 300;
  setTimeout(() => {
    if (coffeeBeans >= 16 && water >= 250) {
      resolve('Stok cukup. Bisa membuat kopi.');
    } else {
      reject('Stok tidak cukup!');
    }
  }, 2000);
});

const getCoffee = () => new Promise((resolve, reject) => {
  const seeds = 100;
  setTimeout(() => {
    if (seeds >= 10) {
      resolve('Kopi didapatkan!');
    } else {
      reject('Biji kopi habis!');
    }
  }, 2000);
});

async function makeCoffee() {
  console.log('halo');
  const coffee = await getCoffee();
  console.log(typeof (coffee));
  console.log(coffee);
  const stock = await checkStock();
  console.log(stock);
}

makeCoffee();
