import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS


function LandingPage() {
  const [heading, setHeading] = useState('MindWisk');
  const history = useHistory();

  // const onLogin = (event) => {
  //   history.push('/login');
  // };

  return (
    <div className="container">
      <h1>{heading}</h1>
      <h2>Simultaneously
      stimulating & relaxing.</h2>
      <h2>Head massagers like the MindWisk are the      simplest, most amazing way to feel good.
        Our first mission is to give away 1,000,000 head massagers.</h2>
        <button> GET ONE FREE </button>


      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Benifits
          </p>

          <p>
            Praesent consectetur orci dui, id elementum eros facilisis id. Sed
            id dolor in augue porttitor faucibus eget sit amet ante. Nunc
            consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
            finibus metus facilisis. Nullam eget lectus non urna rhoncus
            accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
            euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
            lobortis augue mi vel felis. Duis ultrices sapien at est convallis
            congue.
          </p>

          <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          

        </div>
      </div>
    </div>
  );
}

export default LandingPage;