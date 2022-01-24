import React from 'react';
import Footer from './Footer'

class Product extends React.Component {
  name="Sam"
  id=101
  salary=30000
  render() {
    return <>
    <h4>Class to Function</h4>
    <h2>Product</h2>
        <Footer name={this.name}
                id={this.id}
                salary={this.salary}/>
      <hr/>
    </>
  }
}

export default Product;

