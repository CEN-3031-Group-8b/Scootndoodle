import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./ProductTableRow.css";
import '../Cart.css'

export default class ProductTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);  
    }

    //deletes product from cart
    deleteProduct() {
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
            {/*Produces table for products*/}
            <table class="table" width="400px">
                <tbody >
                <tr>
                <td class="text-left" width="90px" >{this.props.obj.item}</td>
                <td width="90px" class="text-left">{this.props.obj.color}</td>
                <td width="90px"class="text-left">{this.props.obj.size}</td>
                <td width="90px" class="text-left">{this.props.obj.price}</td>

                {/*Button to delete products from cart*/}
                <td width="90px"  class="text-left"><Button onClick={this.deleteProduct} size="sm" variant="danger">Delete</Button></td>
                </tr>
                </tbody>
            </table>
            </div>
            );
        }
    }