import ShoppingListViews from 'Views/ShoppingListViews';
import Container from 'Components/Container';
import Section from 'Components/Section';
import './App.scss';

import { ProductData } from 'Data/ProductData';

const { cards } = ProductData;

function App() {
  return (
    <div className="App">
      <Container>
        <Section>
          <ShoppingListViews data={cards} blockTitle="Товары к покупке:" />
        </Section>
      </Container>
    </div>
  );
}

export default App;
