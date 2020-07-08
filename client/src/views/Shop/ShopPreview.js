import React, { Component } from 'react'
import productPhotos from './Cart/DSC_0056.JPG'
import './Cart/Cart.css'
export default class ShopPreview extends Component {
    render() {
        return (
           
  <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div class="col-md-6">
          <div class="card">
            <div class="card-block">
                <img src={productPhotos}/>
              <h4 class="card-title" align="center"> Hippo</h4>
              <p class="card-text p-y-1" align="center"> Description</p>
              <div class="text-center">
      <a href="/CarController" class="btn learn-more">Learn More</a>
    </div>
        
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-block">
            <img src={productPhotos}/>
              <h4 class="card-title" align="center"> Car</h4>
   
              
              <p class="card-text p-y-1" align="center"> Description</p>
              <div class="text-center">
      <a href="/CarController" class="btn learn-more">Learn More</a>
    </div>
            </div>
          </div>
        </div>

            </div>
            </div>
            </div>
           
               
            
      
        )
    }
}
