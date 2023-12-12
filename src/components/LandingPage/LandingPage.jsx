import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import trioImage from "./trio.png";
import kidImage from "./kid.png";
import videoFile from "./video.mp4";
import { useSelector } from "react-redux";
// CUSTOM COMPONENTS
function LandingPage() {
  const [heading, setHeading] = useState("MindWisk");
  const history = useHistory();
  const level = useSelector((state) => state.navBarReducer.level);
  
  const toOrder = () => {
    // Check if the level is not "Insufficient" before navigating
    if (level !== "Insufficient") {
      history.push("/order");
    }

  };
  const toDonate = (event) => {
    history.push("/donate");
  };
  return (
    <div className="container">
      {/* <h1>{heading}</h1> */}
      <br></br>
      <div className="containerheading">
        <h2>Simultaneously stimulating & relaxing.</h2>
      </div>
      <div className="headingintro">
        <h2>
          Head massagers like the MindWisk are the simplest, most amazing way to
          feel good. Our first mission is to give away 1,000,000 head massagers.
        </h2>
      </div>
      <br></br>
      {level !== "Insufficient" && (
        <button onClick={toOrder} className="btn">
          GET ONE FREE!
        </button> )}
      <br></br>
      <br></br>
      <br></br>
      <div className="benefitcontainer">
        <h2>Benefits</h2>
      </div>
      <img src={trioImage} alt="Art" className="trioImage" />
      <div className="feelgoodheader">
        <h3>Feel Good Without Chemicals</h3>
      </div>
      <div className="feelgoodcontainer">
        <p>
          Studies have shown that massage can increase the production of certain
          chemicals in the body, including endorphins and serotonin.
          <br></br>
          <a
            href="https://nccih.nih.gov/health/massage"
            target="_blank"
            rel="noopener noreferrer">
            Learn more about massage benefits here
          </a>
        </p>
      </div>
      <br></br>
      <div className="ancientwisdomheader">
        <h3>Ancient Wisdom</h3>
      </div>
      <div className="ancientwisdomcontainer">
        <p>
          The people of India have incorporated head massage into therapeutic
          practice for about 5,000 years as part of Ayurveda, a holistic
          medicine.
        </p>
      </div>
      <br />
      <div className="growhairheader">
        <h3>Grow Hair & Detoxify</h3>
      </div>
      <div className="growhaircontainer">
        <p>
          Grow hair and detoxify Head massage is known to increase oxygen to the
          scalp and hair follicles which stimulates hair growth. It helps
          detoxify the body by stimulating lymphatic drainage and blood flow to
          the neck thus removing waste products from the body.
          <br></br>
          <a
            href="https://www.webmd.com/skin-problems-and-treatments/hair-loss/remedies-for-hair-loss"
            target="_blank"
            rel="noopener noreferrer">
            Learn more about hair and detoxifying benefits here
          </a>
        </p>
      </div>
      <div className="inactionheader">
        <h1>MindWisk in action!</h1>
      </div>

      <div className="videocontainer">
        <video width="100%" height="auto" controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="missionheader">
        <h1>Our Mission</h1>
      </div>
      <div className="missioncontainer">
        <h2>Ok, they're great. But really, why GIVE them away?</h2>
        <p>
          Think of those you love with whom you would share small things without
          ever expecting anything in return. Your family. Maybe a few close
          friends. What if we had that same giving attitude with a few more
          people. Or with our whole area. Or with everyone. We all know it feels
          good to help other people feel good. Being helped makes other people
          want to help other people. We create more joy, which in turn creates
          more joy. It's surprisingly nice to unexpectedly receive something of
          value for free and it encourages us all to be more generous with
          everyone in our own lives. And it's so very simple.
        </p>
      </div>
      <br></br>
      <img src={kidImage} alt="Art" className="kidImage" />
      <div className="spreadthejoy">
        <h3>Spread the joy!</h3>
      </div>
      <div className="pleasedonatecontainer">
        <p>
          MindWisk runs on the kindness of wonderful people like you. When our
          donation bar is red and reads 'Insufficient,' it means we need your
          help to keep the joy flowing. Your donation enables us to provide free
          MindWisks, directly impacting lives of others. Every bit of your
          contribution goes towards these wonderful gifts. Please consider
          donating today to help us spread joy and positivity!
        </p>
      </div>
      <div className="donatecontainer">
        {/* Progress Bar */}
        {/* Update ProgressBar level here */}
        <ProgressBar level="Low" />
        {/* ^ Will relocate switch once we have Admin Page ^ */}
        <br></br>
        <br></br>
        <button onClick={toDonate} className="btn">
          {" "}
          Donate{" "}
        </button>
      </div>
    </div>
  );
}
export default LandingPage;
