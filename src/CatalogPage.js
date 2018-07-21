import React, { Component } from 'react';
import Catalog from './Catalog';
import { Products } from './constants/products';

class CatalogPage extends Component {
  render() {
    return (
      <Catalog products={ Products } />
    );
  }
}

export default CatalogPage;
