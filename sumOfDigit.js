let number =1234;
let n=0;
let sum=0;
while(number!=0){
n=number%10;
sum+=n;
number=parseInt(number/10);
}
console.log(sum)