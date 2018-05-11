const arrF = [1.5, 3.2, 1.5, 1.5, 4.5, 5, 4.3, 4.5, 4.5];

const result = {};

arrF.forEach((item, index) => {
  if (result[`${item}`]) {
    result[`${item}`]++;
  } else {
    result[`${item}`] = 1;
  }
});

Object.keys(result).forEach(key => {
  if (result[`${key}`] === 1) {
    console.log(key);
  }
});
