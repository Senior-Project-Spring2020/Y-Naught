const express = require('express'),
    router = express.Router(),
    paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox',
    'cient_id': 'ASsDxAJfHYPXuDie7OiVOmbMB22e8gm9G1J_8eVHRXagDY-aL6vzp8E1crx3dOjpB4stGRaWlRmof5dW',
    'client_secret':'EC7jrPOsiYjG7Dg9HrtSzT7Erbl1B0Dpw68zEMeytwqIxGHSuV6p7-jwIf-L6H9divwNVZtS27YuD69f'
});

router.post('/', (req,res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
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
});