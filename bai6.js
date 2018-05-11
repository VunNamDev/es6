const str = 'truong dh cong nghiep cong nghiep';
const arr = str.split(' ');
const result = {};

arr.forEach((item, index) => {
  //console.log(!result[`${item}`]);
  if (!result[`${item}`]) {
    result[`${item}`] = 1;
  } else {
    result[`${item}`]++;
  }
});

console.log(result);
