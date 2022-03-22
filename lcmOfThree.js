let a=3;
let b=12;
let c=16;
let p=a*b*c;
for(var i=1; i<=p; i++)
{
if(i%a==0 && i%b==0 &&  i%c==0)
{
break;
}
}
console.log(i)