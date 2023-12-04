import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import LandingPage from '../LandingPage/LandingPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory()

  const handleClick = () => {

    history.push('/LandingPage')
  }



  return (


    <div className="container">

      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      
      <ProgressBar level={'Low'} ></ProgressBar>

      <button onClick={handleClick}>Landing Page</button>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
