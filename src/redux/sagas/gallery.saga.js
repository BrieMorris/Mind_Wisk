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

  function* gallerySaga() {
    yield takeEvery ('FETCH_ALL_IMAGES', userGallery)
  }

  export default gallerySaga;



