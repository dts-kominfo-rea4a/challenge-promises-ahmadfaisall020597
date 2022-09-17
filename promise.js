const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();

  let marah = 0;
  let tidakMarah = 0;

  ixx.forEach((value) => {
    if(value.hasil == "marah") marah++;
    else tidakMarah++;
  })
  vgc.forEach((value) => {
    if(value.hasil == "marah") marah++;
    else tidakMarah++;
  })

  if (emosi == 'marah') {
    return new Promise((resolved) => resolved(marah));
  } else {
    return new Promise((resolve) => resolve(tidakMarah));
  }
};

module.exports = {
  promiseOutput,
};
