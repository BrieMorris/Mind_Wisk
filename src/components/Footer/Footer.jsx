import React from 'react';
import './Footer.css';
import img4 from './4.png'
import { useHistory } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {

  const history = useHistory();

  const disclaimer = (event) => {
    history.push('/disclaimer')
  }

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }

  return <footer>
    
  

    <div className="left">
    <img src ={img4} onLoad={(event) => resizeImg(event.target, 150)} />
    <br/>
    &copy; MindWisk 
    <br/>  <br/>  <br/> 
     <button onClick = {disclaimer}> Discliamer </button>
     </div>

     <div className="right">
     <h4> contact: MindWisk@gmail.com </h4>
     <p>Social Media Links</p>
     </div>


  <div className="footer">
  
      </div>
</footer>;
}

export default Footer;
