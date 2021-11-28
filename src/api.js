import { db } from './firebase';
import { toast } from 'react-toastify';

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
      toast.error('😰 Мы не смогли получить ни одной вашей карточки товара');
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
      toast.success('Товар успешно добавлен 😝');
      console.log('Document successfully written!', docRef.id);
      return docRef.get();
    })
    .then(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    .catch(error => {
      toast.error(
        '😰 Что-то пошло не так, попробуйте перезапустить приложение',
      );
      console.error('Error writing document: ', error);
    });
}
