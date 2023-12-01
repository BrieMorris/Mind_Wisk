import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// For grid view of gallery - still need to download material ui 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#808080',
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

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }


  return (
    <div>
      <h2>{heading}</h2>
      <br/>  <br/>
      {console.log('gallery images', galleryImages)}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" spacing={2}>
              
        {galleryImages.map(photo => {
            return (
            <div key={photo.id} >
              {console.log('photo id', photo.id)}
              
              <Grid item xs={10}>
                <Item>
              <img src={photo.image} onLoad={(event) => resizeImg(event.target, 300)} alt="MindWisk Photo" />
              <br/>  <br/>
            
              </Item>
            </Grid>
            </div>
            )
        })}
         </Grid>
          </Box>
    </div>
  );
}

export default Gallery;
