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
      yield axios.post('/api/gallery', { ...action.payload, photo: response.data.secure_url});
      action.toGallery()
  } catch (error) {
      console.log('error posting observation', error);
  }     
       
  }

  function* gallerySaga() {
    yield takeEvery ('FETCH_ALL_IMAGES', userGallery);
    yield takeEvery ('ADD_PHOTO', addPhoto)
  }
  

  export default gallerySaga;



