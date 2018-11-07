import * as React from 'react';
import { OrderCategoriesReader } from '../store-services/OrderCategoriesReader';
import OrderCategoryButton from './OrderCategoryButton';

class OrderCategorySelection extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
    OrderCategoriesReader.find().subscribe((categories) => {
      console.log(categories);
    })
  }

  public render() {
    return (
      <div>
        <OrderCategoryButton/>
      </div>
    );
  }
}

export default OrderCategorySelection;
