import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./ProductTableRow.css";
import '../Cart.css'

export default class ProductTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTracker = this.deleteTracker.bind(this);


        
    }

    deleteTracker() {
        axios.delete('https://dextedoodle.herokuapp.com/products/delete-product/' + this.props.obj._id)
            .then((res) => {
                console.log('product successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    
    }



    render() {

        return (

       
<div>
            

<table class="table" width="400px">
  
  <tbody >
    <tr>
    <td class="text-left" width="90px" >{this.props.obj.item}</td>
      <td width="90px" class="text-left">{this.props.obj.color}</td>
      <td width="90px"class="text-left">{this.props.obj.size}</td>
      <td width="90px" class="text-left">{this.props.obj.price}</td>
      <td width="90px"  class="text-left"><Button onClick={this.deleteTracker} size="sm" variant="danger">Delete</Button></td>
    </tr>
    </tbody>
</table>
</div>
        );
    }
}