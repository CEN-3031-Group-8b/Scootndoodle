import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import './ProductTableRow.css'
import productPhotos from '../DSC_0056.JPG'
import '../Cart.css'


export default class CarController extends Component {

  constructor(props) {
    super(props)
  
    this.onChangeProductColor = this.onChangeProductColor.bind(this);
    this.onChangeProductSize = this.onChangeProductSize.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state for Car product
    this.state = {
      item: 'Car',
      description: 'This is the description',
      color: '',
      price: '9.95',
      size: '',
    }
  }

  //Changes product details
  onChangeProductColor(e) {
    this.setState({ color: e.target.value })
  }

  onChangeProductPrice(e) {
    this.setState({ price: e.target.value })
  }

  onChangeProductSize(e) {
    this.setState({ size: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const productObject = {
      item: this.state.item,
      description: this.state.description,
      color: this.state.color,
      quantity: this.state.quantity,
      price: this.state.price,
      size: this.state.size,
    };


    //posts new additions to cart to database
    axios.post('https://dextedoodle.herokuapp.com/products/create-product',productObject)
      .then(res => console.log(res.data));

    this.setState({ 
      item: 'Car',
      description: 'This is the description',
      color: '',
      price: '9.95',
      size: '',
      quantity:''
    
  })
 // Redirect to List of items
this.props.history.push('/create-product')
    
  }

  render() {
    return (

   
    <div className="form-wrapper">
       {/* Breadcrumbs to link to other pages */}
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active">Shop</li>
      </ol>
      

      {/* Links back to the shop */}  
      <a href="/create-product" class="previous">&laquo; Back to Shop</a>
      <br/>

     {/* Product is added to database as a form */}
      <Card>
      <Form onSubmit={this.onSubmit}>
				<div className="wrapper row">
					<div className="col-md-6">
						  <img src={productPhotos} />
					</div>

          {/*displays item name, description and price*/}
          <div className="col-md-6">
            <h3 className="product-title">{this.state.item}</h3>
            <p className="product-description">{this.state.description}</p>
            <p className="product-price">{this.state.price}</p>      
          <br></br>
          
           {/*Submits color, to add a color copy and paste radio button, but change "value" to a different color as a string*/}
          <Form.Group controlId="Name">
          <Form.Label>Color</Form.Label>
          <div class="custom-radios">
          <div>

              {/*Green button*/}
              <input type="radio" id="color-1" name="color" value="green" onChange={this.onChangeProductColor}/>
              <label for="color-1">
                <span>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
              </label>
              </div>
  
              {/*Blue button*/}
              <div>
              <input type="radio" id="color-2" name="color" value="blue" onChange={this.onChangeProductColor}/>
              <label for="color-2">
                <span>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
              </label>
              </div>
              </div>
            </Form.Group>

          {/*Submits size, to add/delete a size add/delete option value  <option value="L">Large</option> and change letter and label */}
          <Form.Group controlId="Name">
          <Form.Label>Size </Form.Label>
            <br></br>
            <select type="text" value={this.state.size} onChange={this.onChangeProductSize} >
            <option value="" selected disabled hidden>Please select a size</option>
            <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
          </select>
          </Form.Group>

        {/*Adds item to the cart */}
        <Button className="add-cart" type="submit">
          Add to Cart
        </Button>
      </div>
    </div>
  
   </Form>
</Card>
</div>
   );
  }
}