const fullName = 'Hap...Thi Minh...Hang';
const arr = fullName.split('...');
const lastName = arr[0];
const firstName = arr[2];
const name = arr[1];
const arr2 = [lastName, name, firstName];
console.log(...arr2);
