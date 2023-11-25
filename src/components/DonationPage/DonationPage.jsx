import React from 'react';
import './DonationPage.css'; 
import { useSelector } from 'react-redux';

function DonationPage() {
  const user = useSelector((store) => store.user);


  const stripe = require('stripe')('sk_test_');

stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});

  return (
    <div className="donationpage">

      <h1> this is the donate page </h1>

      </div>
  );
}

export default DonationPage;
