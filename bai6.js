const str = 'truong dh cong nghiep cong nghiep'
const arr  =str.split(' ');
const result = {};

arr.forEach((item, index) => {
    if (!result[`${item}`]) {
        result[`${item}`] = 1;
    } else {
        result[`${item}`] ++;
    }

});

Object.keys(result).forEach(function(key) {
    console.log(key, result[key]);
});