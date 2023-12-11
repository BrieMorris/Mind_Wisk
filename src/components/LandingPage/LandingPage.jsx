import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import LoginPage from "../LoginPage/LoginPage";
import { useSelector } from "react-redux";
// CUSTOM COMPONENTS


function LandingPage() {
  const [heading, setHeading] = useState("MindWisk");
  const history = useHistory();

  const toOrder = (event) => {
    history.push('/order')
  }

  const toDonate = (event) => {
    history.push('/donate')
  }




  const user = useSelector(state => state.user);
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
      <h1>{heading}</h1>

      <h2>Simultaneously stimulating & relaxing.</h2>
      <h2>
        Head massagers like the MindWisk are the simplest, most amazing way to
        feel good. Our first mission is to give away 1,000,000 head massagers.
      </h2>
         <button onClick={toOrder} className="btn" > GET ONE FREE </button>



      <div className="grid">
        <div className="grid-col grid-col_8">
          <h1>Benefits</h1>
          <br />

          <h3>Feel Good Without Chemicals</h3>
          <p>

            Studies have shown that massage can increase the production of
            certain chemicals in the body, including endorphins and serotonin.
            https://nccih.nih.gov/health/massage


          </p>
          <br />

          <h3>Ancient Wisdom</h3>
          <p>

            The people of India have incorporated head massage into therapeutic
            practice for about 5,000 years as part of Ayurveda, a holistic

          </p>
          <br />

          <h3>Grow Hair & Detoxify</h3>
          <p>
            Grow hair and detoxify Head massage is known to increase oxygen to
            the scalp and hair follicles which stimulates hair growth. It helps
            detoxify the body by stimulating lymphatic drainage and blood flow
            to the neck thus removing waste products from the body. https://www.webmd.com/skin-problems-and-treatments/hair-loss/remedies-for-hair-loss
          </p>
        </div>
        <div className="grid-col grid-col_4">

  
          <h1>Our Mission</h1>

          <h2>Ok, they're great. But really, why GIVE them away?</h2>

          <p>
            Think of those you love with whom you would share small things
            without ever expecting anything in return. Your family. Maybe a few
            close friends. What if we had that same giving attitude with a few
            more people. Or with our whole area. Or with everyone. We all know
            it feels good to help other people feel good. Being helped makes
            other people want to help other people. We create more joy, which in turn creates more joy. It's surprisingly nice to unexpectedly
            receive something of value for free and it encourages us all to be
            more generous with everyone in our own lives. And it's so very
            simple.
          </p>
          <br></br>
        </div>
        {/* <div className="donatecontainer"> */}
        {/* Progress Bar */}
        {/* Update ProgressBar level here */}
        {/*
          <ProgressBar level="Insufficient" />
          ^ Will relocate switch once we have Admin Page ^ */}

        <div className="donatecontainer">
          <ProgressBar level={levels[levelIndex]} />

          <h3>Spread the joy!</h3>
          <br></br>

          {/* Conditionally render the button if the user is logged in */}
        {isLoggedIn && (
          <button onClick={handleButtonClick}>Change Level</button>
        )}
          <br></br>
          <button> Donate </button>

          <button onClick={toDonate} className="btn" > Donate </button>


        </div>
      </div>
    </div>
  );
}

export default LandingPage;