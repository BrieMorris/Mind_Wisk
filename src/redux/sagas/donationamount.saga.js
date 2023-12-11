import { put, takeLatest } from 'redux-saga/effects';

// Function to temporarily store the amount in redux store
function* donationAmount(action) {
  try {
    console.log('Dispatch made it to saga:', action.payload);
    yield put({ type: 'SET_AMOUNT', payload: action.payload });
  } catch (error) {
    console.log('Upload content to reducer failed', error);
    alert('Something went wrong');
  }
}

function* donationSaga() {
  // Listens for the action to temporarily store the amount
  yield takeLatest('TEMP_STORE_AMOUNT', donationAmount);
}

export default donationSaga;