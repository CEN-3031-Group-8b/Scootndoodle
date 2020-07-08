import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {CartOverview} from "./CartOverview"
import Container from 'react-bootstrap/Container'
import './Cart.css'
import ProductView from "./Product/ProductView"





export default class mainCart extends Component {
    render() {
        return (
        
<Container name="container">


<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item active">Shop</li>
</ol>


    <h>
        Dextedoodle Shop
    </h>
    <hr/>

    <div class="row">
  <div class="col-9">
  
        
<ProductView></ProductView>
 

       
        

        </div>

        
        <div class="col-md-3">
            <CartOverview/>
            <div class="text-center">
            <Link to="/product-list">
  <button className="add-to-cart btn btn-default" type="button">Proceed to Cart</button>
  </Link>
        
</div>
            
        </div>
        
        </div>
        


    
        </Container>


 
        )
    }
}

