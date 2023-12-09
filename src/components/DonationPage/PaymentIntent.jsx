import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_");

function PaymentIntent() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const createPaymentIntent = async (amount) => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };
  
    // Calls the function with the actual amount 
    createPaymentIntent(yourAmountVariable); // 'yourAmountVariable' gets replaces with amount value 
  
  }, []);

const appearance = {
theme: 'stripe',
};
const options = {
// passing the client secret obtained from the server
clientSecret: '{{CLIENT_SECRET}}',
appearance,
};

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default PaymentIntent;