import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS


function LandingPage() {
  const [heading, setHeading] = useState('MindWisk');
  const history = useHistory();

 
  // const toOrder = (event) => {
  //   history.push('/order')
  // }

  // const toDonate = (event) => {
  //   history.push('/donate')
  // }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <h2>Simultaneously
      stimulating & relaxing.</h2>
      <h2>Head massagers like the MindWisk are the simplest, most amazing way to feel good.
        Our first mission is to give away 1,000,000 head massagers.</h2>
        <button> GET ONE FREE </button>


      <div className="grid">
        <div className="grid-col grid-col_8">
          <h1>Benifits</h1>

          
            <h3>Feel Good Without Chemicals</h3>
            <p>
            Studies have shown that massage can increase the production of certain chemicals in the body, including endorphins and serotonin. https://nccih.nih.gov/health/massage https://www.quora.com/Whats-the-science-behind-head-massagers
            </p>
                <br/>

            <h3>Ancient Wisdom</h3>
            <p>
            The people of India have incorporated head massage into therapeutic practice for about 5,000 years as part of Ayurveda, a holistic medicine.
            </p>
              <br/>

              <h3>Grow Hair & Detoxify</h3>
            <p>
            Grow hair and detoxify Head massage is known to increase oxygen to the scalp and hair follicles which stimulates hair growth. It helps detoxify the body by stimulating lymphatic drainage and blood flow to the neck thus removing waste products from the body.
            </p>

         
        </div>
        <div className="grid-col grid-col_4">
          <h1>Our Mission </h1>

          <h2>Ok, they're great. But really, why GIVE them away?</h2>

          <p>Think of those you love with whom you would share small things without ever expecting anything in return. Your family. Maybe a few close friends. What if we had that same giving attitude with a few more people. Or with our whole area. Or with everyone. We all know it feels good to help other people feel good. Being helped makes other people want to help other people. We create more joy, which in turn creates more joy. It's surprisingly nice to unexpectedly receive something of value for free and it encourages us all to be more generous with everyone in our own lives. And it's so very simple.</p>

          <h3>Spread the joy!</h3>

          <button> Donate </button>

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
