import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchViewShelf() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('api/user', config);

        yield put({ type: 'SET_SHELF', payload: response.data });
    } catch (error) {
        console.log('Get Request Failed (fetchShelf)', error);
    }
}

function* viewShelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchViewShelf);
}

export default viewShelfSaga;