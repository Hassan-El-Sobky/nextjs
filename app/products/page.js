"use clinet"
import React from 'react'

export default async function page({data}) {
 
//    async function  test(){
//          let data =await fetch('http://localhost:9000/products');
//           let jsonData= await data.json();
//           console.log(jsonData);
//         }

    //  let products= await test();
  
    console.log(data);

  return (
    <div>

        <h3> Hlooo</h3>
      
    </div>
  )
}




  export async function pro() {
    const res = await fetch('http://localhost:9000/products')
    let jsonData= await ress.json();
    return < page data={jsonData}/>
  }
  