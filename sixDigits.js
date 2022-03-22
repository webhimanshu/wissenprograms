let number=27098;
let count=0;
while(number!=0){
count++;
console.log(number)
number=parseInt(number/10);
}
console.log(count)
if(count==6){
console.log("number have six digits")
}else{
console.log("number not have six digits")
}
