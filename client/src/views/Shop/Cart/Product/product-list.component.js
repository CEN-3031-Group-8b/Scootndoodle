import React, { Component } from "react";
import axios from 'axios';
import ProductTableRow from './ProductTableRow';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {CartOverview} from '../CartOverview'
import StripeCheckout from 'react-stripe-checkout';

let total = 995;



export default class CartList extends Component {
  onToken = (token, addresses) => {
    alert("Payment is Successful! Thank You!");
};
  constructor(props) {
    super(props)
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('https://dextedoodle.herokuapp.com/products/')
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
      this.props.history.push('/product-list')
      
  }

  

  DataTable() {
    return this.state.products.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (

    

      <Container>


      <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/create-product">Shop</a></li>
  <li class="breadcrumb-item active">Cart</li>
</ol>

          

<div class="row">
  <div class="col-9">
    <div className="shop-container">
		<div className="card">
    <table class="table">
     
    <tr>
    <td width="90px"  class="text-left"><b>Item</b></td>
    <td width="90px"  class="text-left"><b>Color</b></td>
    <td width="90px"  class="text-left"><b>Size</b></td>
    <td width="90px"  class="text-left"><b>Price</b></td>
    <td width="90px"  class="text-left"><b>Action</b></td>
    </tr>
    

  </table>
        </div>   

  
          {this.DataTable()}
          
          </div>
          </div>
          <div class="col-md-3">
			<CartOverview/>
			<div class="text-center">
			<StripeCheckout className={"center"}
                       amount={total}
                       billingAddress
                        description="DexteDoodle Therapeutic Tool"
                        locale="auto"
                        name="DexteDoode.com"
                        stripeKey="pk_test_1tLXq8tyKXWxDrUC1dJtkLVE00DaMRX9Ur"
                        token={this.onToken}
                       zipCode
                    />
  </div>
  </div>   
        
         </div>
        
			

    </Container>
    
    );

  }
}