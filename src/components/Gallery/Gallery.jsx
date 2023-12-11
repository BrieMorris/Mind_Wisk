import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// For grid view of gallery - still need to download material ui 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#d9d9d9' : '#d9d9d9',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary, 
  
}));


//function for users to see pictures of people using the mind wisk
function Gallery(props) {

  const [heading, setHeading] = useState('MindWisk Gallery');
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useSelector(store => store.galleryReducer.authReducer);
  // const user = useSelector((store) => store.user)
  // const isLoggedIn = Object.keys(user).length > 0;
  const galleryImages = useSelector(store => store.galleryReducer.userGallery);

  console.log('gallery images', galleryImages);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_IMAGES'})
    console.log('logged in' , loggedIn);
  }, [dispatch]);

  const handleDelete = (imageId) => {
    // Dispatch an action to delete the image with the specified imageId
    dispatch({ type: 'DELETE_IMAGE', payload: { imageId } });
  };

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }


 return (
    <div className="container">
      {/* add fundraising bar here */}
      <h2>{heading}</h2>
      <br /> <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" spacing={2}>
          {galleryImages.map((photo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  textAlign: 'center',
                  backgroundColor: '#d9d9d9', // Set background color here
                }}
              >
                <img
                  src={photo.image}
                  onLoad={(event) => resizeImg(event.target, 200)}
                  alt="MindWisk Photo"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <h3>{photo.description}</h3>
                {loggedIn.loggedIn && (
                  <button onClick={() => handleDelete(photo.id)}>Delete</button>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

 

export default Gallery;
