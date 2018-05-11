const arr = [1, 2, 4, 5, 3, 4, 2, 6, 5, 8];
const result = {};

arr.forEach(item => {
  if (result[`${item}`]) {
    result[`${item}`]++;
  } else {
    result[`${item}`] = 1;
  }
});
console.log(result);
