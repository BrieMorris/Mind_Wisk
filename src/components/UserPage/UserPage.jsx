import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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

  const isLoggedIn = Object.keys(user).length > 0;

  const levels = ["Insufficient", "Low", "Plenty"];

  const [levelIndex, setLevelIndex] = useState(0);


  useEffect(() => {
    // Fetch the initial level index from the server
    fetch('/api/getLevelIndex')
      .then((response) => response.json())
      .then((data) => setLevelIndex(data.levelIndex));
  }, []);



  const handleButtonClick = () => {
    console.log('Button Clicked');

    // Update the level index on the server
    fetch('/api/updateLevelIndex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newLevelIndex: (levelIndex + 1) % levels.length }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server Response', data);
        if (data.success) {
          // Update the level index on the client
          setLevelIndex((prevIndex) => (prevIndex + 1) % levels.length);
        }
      });
  };


  return (


    <div className="container">

      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />


      <div className="donatecontainer">
        <ProgressBar level={levels[levelIndex]} />

        <h3>Spread the joy!</h3>
        <br></br>
        {/* Conditionally render the button if the user is logged in */}
        {isLoggedIn && (
          <button onClick={handleButtonClick}>Change Level</button>
        )}

        <button onClick={handleClick}>Landing Page</button>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
