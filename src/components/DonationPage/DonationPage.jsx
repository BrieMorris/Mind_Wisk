import React from 'react';
import './DonationPage.css'; 
import { useSelector } from 'react-redux';

function DonationPage() {
  const user = useSelector((store) => store.user);

  return (
    <div className="donationpage">

      <h1> this is the donate page </h1>

      </div>
  );
}

export default DonationPage;
