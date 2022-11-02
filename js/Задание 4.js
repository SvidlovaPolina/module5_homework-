function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min; 
  } 
   
  let result = getRandomInt(0, 100);
  
  console.log(result);