import * as React from 'react';
import { OrderCategoriesReader } from '../store-services/OrderCategoriesReader';

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
        Hello World
      </div>
    );
  }
}

export default OrderCategorySelection;
