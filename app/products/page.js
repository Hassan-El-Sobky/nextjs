
import React from 'react'


async function  test(){
  let data =await fetch('https://jsonplaceholder.typicode.com/users');
   let jsonData= await data.json();
  return jsonData;
 }




export default async function page({data}) {
 
const products= await test();

 console.log(products);
  return (
    <div>
         {products.map(p=>(
          <h3 key={p.id}>{p.name}</h3>
         ))}
    </div>
  )
}




  export async function pro() {
    const res = await fetch('http://localhost:9000/products')
    let jsonData= await ress.json();
    return < page data={jsonData}/>
  }
  