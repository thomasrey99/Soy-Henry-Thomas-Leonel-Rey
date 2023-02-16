'use strict';

function BinarioADecimal(num) {
  let binario=num.split("").reverse()
  let suma=0;
  for (let i=0;i<binario.length;i++){
   suma+=binario[i]*(2**i)
  }
  return suma
}

function DecimalABinario(num) {
   let total =num;
   let restos=[];
   while(total>=0){
      restos.push(total%2)
      total=Math.floor(total/2)
   }
   restos=restos.reverse().join("")
   return restos

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
}; 
