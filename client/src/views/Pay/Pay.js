import React from 'react';
const paypal = require('paypal-rest-sdk');

function Pay() {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Car",
                    "sku": "001",
                    "price": "9.95",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "9.95"
            },
            "description": "ScootnDoodle thereputic tool!"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
        }
    });

    return (
        <div className="Pay">
            <header className="Checkout">

            </header>
        </div>
    );
}

export default Pay;
