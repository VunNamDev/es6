const str = 'Truong dai hoc Cong nghiep Ha Noi xxxxxxxx';

const arrStr = str.split(' ');

let [maxStr] = [...arrStr]
let index = 0;
arrStr.forEach((value,i)=>{
    if(maxStr.length<value.length){
        maxStr = value;
        index =i;
    }
});
console.log(maxStr,index);

