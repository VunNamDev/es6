const arr = [1, 2, 4, 5, 3, 4, 2, 6, 5, 8];
const x = 7;
arr.sort();
let isAdd = false;
arr.every((item, index) => {
  if (item > x) {
    arr.splice(index, 0, x);
    isAdd = true;
    return false;
  }
  return true;
});
if (!isAdd) {
  arr.splice(0, 0, x);
}
console.log(arr);
