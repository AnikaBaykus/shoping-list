import React, { useEffect, useState } from 'react';
import ShoppingListViews from 'Views/ShoppingListViews';
import Container from 'Components/Container';
import Section from 'Components/Section';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { db } from './firebase';

import { fetchProducts, createProducts } from './api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('shopping-list').then(products => {
      setProducts(products);
    });
  }, []);

  const submitFormHandler = (name, price, image, description, url, event) => {
    const data = {
      name: name,
      price: price,
      description: description,
      alt: name,
      isBuy: false,
      image: url,
    };
    createProducts(data).then(product => {
      setProducts([...products, product]);
    });
  };

  const deleteProduct = productId => {
    db.collection('shopping-list')
      .doc(`${productId}`)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        toast.success(' Добавили что-то лишнее 😬');
        setProducts(products.filter(product => product.id !== productId));
      })
      .catch(error => {
        toast.error(
          '😰 Что-то пошло не так, попробуйте перезапустить приложение 😵',
        );
        console.error('Error removing document: ', error);
      });
  };

  const buyProduct = productId => {
    const product = products.find(el => el.id === productId);
    if (!product) return;

    db.collection('shopping-list')
      .doc(`${productId}`)
      .update({
        isBuy: !product.isBuy,
      })
      .then(() => {
        toast.info('Отметили');
        console.log('Document successfully updated!');
        const newProducts = products.map(el => {
          if (el.id === productId) {
            return {
              ...el,
              isBuy: !el.isBuy,
            };
          }
          return el;
        });
        setProducts(newProducts);
      })
      .catch(error => {
        toast.error(
          '😰 Что-то пошло не так, попробуйте перезапустить приложение 😵',
        );
        console.error('Error updating document: ', error);
      });
  };

  return (
    <div className="App">
      <Container>
        <Section>
          <ShoppingListViews
            onSubmit={submitFormHandler}
            onDeleteProduct={deleteProduct}
            data={products}
            // image={image}
            blockTitle="Товары к покупке:"
            onBuyProduct={buyProduct}
          />
        </Section>
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
