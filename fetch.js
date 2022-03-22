
fetch('https://fakestoreapi.com/products').then((data)=>
{
return data.json();
}).then((product)=>
{

for(let p of product)
{
document.getElementById('presentData').innerHTML+=`<option value=${p.id}>${p.title}</option>`;
}
})
