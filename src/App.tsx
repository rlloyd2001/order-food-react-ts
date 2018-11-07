import * as React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OrderCategorySelection from './order-category-selection/OrderCategorySelection';

class App extends React.Component {
  public render() {
    return (
      <OrderCategorySelection/>
    );
  }
}

export default App;
