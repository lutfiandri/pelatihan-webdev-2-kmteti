// run with browser

const getCovidData1 = () => {
  fetch('https://covid19.mathdro.id/api')
    .then((rawData) => rawData.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getCovidData1();

const getCovidData2 = async () => {
  try {
    const rawData = await fetch('https://covid19.mathdro.id/api');
    const data = await rawData.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getCovidData2();
