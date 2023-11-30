import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

//For grid view of gallery - still need to download material ui 
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#808080',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary, 
// }));

//add to App.jsx when on MAIN branch

//function for users to see pictures of people using the mind wisk
function Gallery(props) {

  const [heading, setHeading] = useState('MindWisk Gallery');
  // const history = useHistory();
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

    </div>
  );
}

export default Gallery;
