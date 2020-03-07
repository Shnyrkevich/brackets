module.exports = function check(str, bracketsConfig) {
  
  let len = str.length;
  let counter = 0;
  let mas = [];

  for(let i = 0; i <  bracketsConfig.length;){
    mas[i] = bracketsConfig[i].join(""); 
    
    if(str.includes(mas[i])){
      str = str.replace(mas[i], "");
      counter++;
      i=0;
    } else {
      i++;
    }
  
    console.log("String:", str);
  } 
  console.log("len", len/2, counter);

  if(len/2 == counter) {
    return true;
  } else {
    return false;
  }

 // console.log( str.includes(bracketsConfig[0].join('')));

}
