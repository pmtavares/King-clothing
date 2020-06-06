import {takeEvery, call, put} from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import ShopActionsTypes from './shop.types';
import {fecthCollectionSuccess, fecthCollectionFailure} from './shop.actions';

export function* fetchCollectionsAsync()
{
    yield console.log("I am ok");
    
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();   
        const collectionsMap =  yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fecthCollectionSuccess(collectionsMap))
    }
    catch(err)
    {
        yield put(fecthCollectionFailure(err.message))
    }

}

export function* fetchCollectionsStart()
{
    yield takeEvery(ShopActionsTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}