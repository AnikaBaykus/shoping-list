import { db } from './firebase';

export function fetchProducts(collection) {
  return db
    .collection(collection)
    .get()
    .then(snapshot => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return productsData;
    })
    .catch(error => {
      console.log('Ошибка чтения базы из Api.js', error);
    });
}

export function createProducts(data) {
  return db
    .collection('shopping-list')
    .add({
      ...data,
      alt: data.name,
      isBuy: false,
    })
    .then(docRef => {
      console.log('Document successfully written!', docRef.id);
      return docRef.get();
    })
    .then(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    .catch(error => {
      console.error('Error writing document: ', error);
    });
}
