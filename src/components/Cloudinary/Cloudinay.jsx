import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';

//the Cloudinary function allows the admin to upload photos for the gallery
function Cloudinary(props) {
  // const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const [image, setImage] = useState();
  const [description, setdescription] = useState('');

  const onFileChange = async (event) => {
    // Access the selected file
    const fileToUpload = event.target.files[0];

    // Limit to specific file types.
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    // Check if the file is one of the allowed types.
    if (acceptedImageTypes.includes(fileToUpload.type)) {
      setImage(fileToUpload);
    } else {
      alert('Please select an image');
    }
  }
 
  const addPhoto = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_PHOTO', payload: { description: description}, fileToUpload: image, toGallery})
  } 

  const toGallery = (event) => {
    history.push('/gallery')
  }

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }

  return (
    <div className="container">
    <h1 style={{ textAlign: 'center', color: '#1f4a43' }}>Add MindWisk Photo:</h1>
    <br/>
    <form onSubmit = {addPhoto}>
    <input  type="file" 
            accept="image/*" 
            onChange={onFileChange}
            placeholder="image url"/>
        <br/>
    <br/>  <br/>
  <h3 style={{ textAlign: 'center', color: '#1f4a43' }}>Description:</h3>
    <br/>
    <textarea onChange={(e) => setdescription(e.target.value)} type="text" placeholder="add description"/>
    <br/>  <br/>
    <div>
    <Button onClick={addPhoto}>ADD PHOTO</Button>
    </div>
    </form>
    </div>
  );
}

export default Cloudinary;
