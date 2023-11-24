import React from 'react';
import { Link } from 'react-router-dom';
import '.DonationPage.css'; 
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="donationpage">

            <Link className="navLink" to="/info">
              Donation Page 
            </Link>

            <LogOutButton className="navLink" />
      

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
