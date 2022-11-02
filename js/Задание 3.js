// 1 способ

let str = 'tpircSavaJ'
let array = [...str]

//console.log(array);

//console.log(array.reverse());

console.log(array.reverse().join(""));


// 2 способ

/*let str = 'tpircSavaJ'
let array = [...str]

function reverseStr(str){
   let a = "";
   for (i = 0; i < str.length; i++){
      a += str[(str.length - 1) - i];
   }
   return a;
}

console.log(reverseStr(str));*/