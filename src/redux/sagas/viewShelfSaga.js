import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchViewShelf() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('api/shelf', config);

        yield put({ type: 'SET_SHELF', payload: response.data });
        console.log(response.data);
        
    } catch (error) {
        console.log('Get Request Failed (fetchShelf)', error);
    }
}

function* deleteItem() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };
        const response = yield axios.delete('api/shelf', config);
        yield put({type: 'SET_SHELF', payload: response.data});
    } catch (error) {
        console.log('Delete Request Failed (deleteItem)', error);
    }
}

function* viewShelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchViewShelf);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default viewShelfSaga;