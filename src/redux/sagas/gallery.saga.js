import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

//function to fetch all images and put in gallery -- still needs reducer type on line 10 

  function* userGallery(action) {

    try { 
      const galleryResponse =
      yield axios.get(`/api/gallery`);
      yield put ({type: 'SET_ALL_IMAGES', payload: galleryResponse.data });
    } catch (error) {
      console.log('userGallery saga', error);
    }
  };

  

  //saga function to add add posters to be displayed in archive using db
  function* addPhoto(action) {
    try { 
      const formData = new FormData();
      formData.append('file', action.fileToUpload);
      formData.append('upload_preset', process.env.REACT_APP_PRESET);
      let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

      const response = yield axios.post(postUrl, formData);
      console.log('Cloudinary response:', response.data);

      yield axios.post('/api/gallery', { ...action.payload, photo: response.data.secure_url});
      action.toGallery()
      console.log('payload', action.payload);
      
  } catch (error) {
      console.log('error posting observation', error);
  }     
       
  };


  // saga function to delete images
  function* deleteImage(action) {
  
    console.log('action', action.payload);
    try {
      const deletePic = 
      yield axios.delete('/api/gallery/'+ action.payload.imageId);
      console.log('deletePic', deletePic.data);
      yield put({ type: 'FETCH_ALL_IMAGES'});
    } catch (error) {
        console.log('error deleting image', error);
    }    
  }


   //create a new post request with url I got from cloudinary and description

  function* gallerySaga() {
    yield takeEvery ('FETCH_ALL_IMAGES', userGallery);
    yield takeEvery ('ADD_PHOTO', addPhoto);
    yield takeEvery ('DELETE_IMAGE', deleteImage);
  }
  

  export default gallerySaga;



