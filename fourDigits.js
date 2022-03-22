let digit=454;
let count=0;
while(digit!==0){
count++;
digit=parseInt(digit/10)
}
if(count==4){
console.log("number have 4 digits")
}
else{
    console.log("dont have")
}