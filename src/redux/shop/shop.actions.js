import ShopActionTypes from './shop.types'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';

export const fecthCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fecthCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fecthCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionStartAsync = () => {
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fecthCollectionStart());

        collectionRef.get()
        .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fecthCollectionSuccess(collectionsMap));
        })
        .catch(error => dispatch(fecthCollectionFailure(error)));
    }
}
