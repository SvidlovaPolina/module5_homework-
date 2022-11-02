function test(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[0])
            return false;
    }
    return true;
}

let array = [1, 1, 1, 1];
var result = test(array);

console.log(result);