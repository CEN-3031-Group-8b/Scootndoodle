import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CarController from "./CarController";
import HippoController from "./HippoController"
import productPhotos from '../DSC_0056.JPG'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import '../Cart.css'


export default class ProductView extends Component {
    render() {
        return (
            <div>
            <div className="shop-container">
            <div className="card">
                    <div className="wrapper row">
                        <div className="col-md-6">
                              <img src={productPhotos} />
                        </div>
                        <div className="col-md-6">
                            <h3 className="product-title">Hippo</h3>
                            <p className="product-description">Description of Product</p>
                            
                            <br></br>
                            <a href="/HippoController" class="add-to-cart btn btn-default">View More</a>

                               
    
                
                            </div>
                        </div>
                    </div>
                </div>
            
    
     
    
            <div className="shop-container">
            <div className="card">
                    <div className="wrapper row">
                        <div className="col-md-6">
                        <img src={productPhotos} />					
                        </div>
                        <div className="col-md-6">
                            <h3 className="product-title">Car</h3>
                            <p className="product-description">Description of Product</p>
                        
                        
                           
    <br></br>
    <a href="/CarController" class="add-to-cart btn btn-default">View More</a>

                        </div>
                    </div>
                </div>
    
                
    
              
            </div>
            </div>
            
        )
    }
}
