import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@material-ui/core';
import { PayPalButton } from "react-paypal-button-v2";
import TextField from '@material-ui/core/TextField';

import CardSection from './CardSection';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment('{SECRET_KEY}'', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
      error: {

      }
    });

    if (result.error) {
      result.json("Error")
      console.log(result.error.message);
    } else {
      // Payment works
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.

      }
    }
  };

  return (
    <div>
    <form autoComplete="on" >
      <TextField required id="standard-required" label="Cardholder Name"/>
      <TextField required id="standard-required" label="Address"/>
      <TextField required id="standard-required" label="Phone Number"/>
      <CardSection />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Confirm Payment</Button>
    </form>
    <PayPalButton></PayPalButton>
    </div>
  );
}