import firebase from 'firebase';

export default class FirestoreService {
    constructor(storage = firebase.firestore()) {
        this.storage = storage;
    }

    collection(collectionName) {
        return this.storage.collection(collectionName);
    }

    fetchCollection(collectionName, wrapper) {
        return wrapper(this.collection(collectionName)).get()
            .then(response => response.docs)
            .then(docs => docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
    }
};