import React, { useEffect, useState } from 'react';
import ShoppingListViews from 'Views/ShoppingListViews';
import Container from 'Components/Container';
import Section from 'Components/Section';
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
    const img = {
      image,
    };
    console.log('Пришел документ:', img);
  };

  const deleteProduct = productId => {
    db.collection('shopping-list')
      .doc(`${productId}`)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        setProducts(products.filter(product => product.id !== productId));
      })
      .catch(error => {
        console.error('Error removing document: ', error);
      });
  };

  console.log('products = ', products);

  const buyProduct = productId => {
    const product = products.find(el => el.id === productId);
    if (!product) return;

    db.collection('shopping-list')
      .doc(`${productId}`)
      .update({
        isBuy: !product.isBuy,
      })
      .then(() => {
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
    </div>
  );
}

export default App;
