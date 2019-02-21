import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import ProductTable from './components/ProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}



export default App;
