import React from "react";
import { ProductProvider } from "./contexts/ProductContext";
import List from "./components/List";


const App = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Магазин товаров</h1>
        <List />
      </div>
    </ProductProvider>
  );
};

export default App;
