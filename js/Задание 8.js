let map = new Map();
map.set("1", "str1")
   .set(1, "num1")
   .set(true, "bool1");
map.forEach((value, key, map) => {
   console.log(`Ключ - ${key}, Значение - ${value}`);
});