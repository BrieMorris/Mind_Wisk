import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ThankYouPage(props) {

  const history = useHistory()

  const handleClick = () => {
    history.push('./donate');
  };


  return (
    <div>
      <h2> Thank You! </h2>
      <p>Please feel free to donate</p>
      <button onClick={handleClick}> Donate</button>
    </div>
  );
}

export default ThankYouPage;
