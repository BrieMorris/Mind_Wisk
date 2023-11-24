import React from 'react';
import { Link } from 'react-router-dom';
import './DonationPage.css'; 
import { useSelector } from 'react-redux';

function DonationPage() {
  const user = useSelector((store) => store.user);

  return (
    <div className="donationpage">

            {/* <Link className="navLink" to="/donate">
              Donation Page 
            </Link> */}

      </div>
  );
}

export default DonationPage;
