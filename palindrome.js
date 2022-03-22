let number=784;
let result=0;
let temp=number
let rem=0;
while(temp!=0){
rem=temp%10;
result =result*10+rem;
temp=parseInt(temp/10);
}
// console.log(number);
// console.log(result)

if(number!=result){
console.log("Number is not palindrome")
}else{
    console.log("Number is palindrome")
}