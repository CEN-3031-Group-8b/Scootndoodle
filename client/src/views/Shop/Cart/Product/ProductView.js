import React, { Component } from 'react'
import productPhotos from '../DSC_0056.JPG'
import '../Cart.css'

//Shows first page of shop
export default class ProductView extends Component {
    render() {
        return (
            <div>

            {/*Main shopping page, to add another project copy shop-container and add new details */}    
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
                            {/*View more button links to the product controller where you can cutomize and add button to cart*/}
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
    {/*View more button links to the product controller where you can cutomize and add button to cart*/}
    <a href="/CarController" class="add-to-cart btn btn-default">View More</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>    
        )
    }
}
