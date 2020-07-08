import React from 'react'
import Container from 'react-bootstrap/Container'
import './PaymentTest.css'
import StripeCheckout from 'react-stripe-checkout';


// const CLIENT = {
//     sandbox: 'AUm1Ey3myi5PKQFlWRUmJTzRrMN1KrD45lOLYoyAxdn-5A8cKaIr8XhzYkVx9C8QJFxsJNAqqJ0sRKXs',
//     production: 'xxxxxxxxx',
// };
let total = 995;

class CartView extends React.Component {

    constructor(props) {
        super(props);
    }

    //response after payment completed
    onToken = (token, addresses) => {
        alert("Payment is Successful! Thank You!");
    };
    render() {

        return(
            <Container className = 'container'>         
                <div>
                    < nav className='navBar'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href={"/Home"}>Home</a></li>
                            <li className="breadcrumb-item "><a href={"/create-product"}>Shop</a></li>
                            <li className="breadcrumb-item active"><a href="/product-list">Cart</a></li>
                        </ol>
                    </nav>
                    <h1 className='color'>
                        Your Cart
                    </h1>
                    <hr/>




<table class="table bordered">
  <tbody>
    <tr>
    
      <td>{this.props.obj.item}</td>
      <td>{this.props.obj.color}</td>
      <td>{this.props.obj.price}</td>
      <td>{this.props.obj.size}</td>
    </tr>
    </tbody>
</table>
                
                    <StripeCheckout className={"center"}
                       amount={total}
                       billingAddress
                        description="DexteDoodle Therapeutic Tool"
                        locale="auto"
                        name="DexteDoodle.com"
                        stripeKey="pk_test_1tLXq8tyKXWxDrUC1dJtkLVE00DaMRX9Ur"
                        token={this.onToken}
                       zipCode
                    />
                    <hr/>
                </div>
            </Container>
        );
    };
}
export default CartView;

