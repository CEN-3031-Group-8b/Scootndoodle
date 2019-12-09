import React from 'react'
import productPhotos from '../../assets/DSC_0056.JPG'
import Container from 'react-bootstrap/Container'
import './ShopPreview.css'
import { Link } from 'react-router-dom';


const price = 9.95;

export default function ShopPreview() {


    return(

        <Container className = 'container'>
            <div>
                <nav className='navBar'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href={"/Home"}>Home</a></li>
                        <li className="breadcrumb-item active"><a href={"/ShopPreview"}>Shop</a></li>


                    </ol>
                </nav>
            </div>

            <h1 className='color'>
                DexteDoodle Shop
            </h1>




            <div className="shop-container">
                <div className="card">
                    <div className="wrapper row">
                        <div className="col-md-6">
                            <img className='resize' src={productPhotos} alt={''}/>
                        </div>
                        <div className="col-md-6">

                            <h3 className="product-title">Hippo</h3>
                            <p className="product-description">Description of Product</p>
                            <b>Current Price: ${price}</b>

                            <div className="action"> Size:

                                <button className="size"  >M</button>
                                <button className="size" >L</button>
                            </div>


                            <div className="action">Colors:
                                <button className="blue" > </button>
                                <button className="green" > </button>
                            </div>

                            <div className="action">
                                <button className="add-to-cart btn btn-default">Add to Cart</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-container">
                <div className="card">
                    <div className="wrapper row">
                        <div className="col-md-6">
                            <img className='resize1' src={productPhotos} alt={''}/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="product-title">Car</h3>
                            <p className="product-description">Description of Product</p>
                            <b>Current Price: ${price}</b>

                            <div className="action"> Size:
                                <button className="size" type="button">M</button>
                                <button className="size" type="button">L</button>
                            </div>

                            <div className="action">Colors:
                                <button className='blue' > </button>
                                <button className='green' > </button>
                            </div>

                            <div className="action">
                                <button className="add-to-cart btn btn-default" type="button">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/Cart">
                    <button className='format'>Proceed to Cart</button>
                </Link>
            </div>



        </Container>
    );
}

