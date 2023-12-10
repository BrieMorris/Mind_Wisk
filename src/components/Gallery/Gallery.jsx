import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cloudinary from '../Cloudinary/Cloudinay';

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
  const galleryImages = useSelector(store => store.galleryReducer.userGallery);

  console.log('gallery images', galleryImages);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_IMAGES'})
  }, []);

  console.log('Gallery Images:', galleryImages);

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }


  return (
    <div className="container">
      {/* add funderaising bar here  */}
      <h2>{heading}</h2>
      <br/>  <br/>
      {console.log('gallery images', galleryImages)}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" spacing={2}>
              
        {galleryImages.map(photo => {
            return (
            <div key={photo.id} >
              {console.log('photo id', photo.id)}
              
              <Grid item xs={10} >
                <Item>
              <img src={photo.image} onLoad={(event) => resizeImg(event.target, 200)} alt="MindWisk Photo" />
              <h3>{photo.description}</h3>
              <br/>  <br/>
            
              </Item>
            </Grid>
            </div>
            )
        })}
         </Grid>
          </Box>
          <Cloudinary/>
    </div>
  );
}

export default Gallery;
