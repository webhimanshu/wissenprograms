let number=153;
let temp=number;
let sum=0;
let rem=0;
//let count=0;
//loop for counrting number
// while(temp!=0){
//     // rem=temp%10;
//     count++;
//     temp=parseInt(temp/10);
// }
// console.log(count)
while(temp!=0){
      rem=temp%10;
    sum+=rem*rem*rem;
    temp=parseInt(temp/10);
}
console.log(sum);
if(number==sum){
console.log("Number is Armstrong")
}else{
    console.log("Number is not ArmStrong")
}