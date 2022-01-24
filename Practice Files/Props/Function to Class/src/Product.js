import React from 'react';
import Footer from './Footer'

let Product = ()=> {
  let name="Sam",id=101,salary=30000
  return <>
    <h4> Function To Class</h4>
    <h2>Product</h2>
        <Footer name={name}
                id={id}
                salary={salary}/>
      <hr/>
    </>
}

export default Product;
