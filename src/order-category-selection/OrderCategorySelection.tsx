import * as React from 'react';
import { OrderCategoriesReader } from '../store-services/OrderCategoriesReader';
import OrderCategoryButton from './OrderCategoryButton';

class OrderCategorySelection extends React.Component {
  public state: Readonly<{ categories: IOrderCategory[] }> = { categories: [] };

  constructor(props: Readonly<{}>) {
    super(props);
    OrderCategoriesReader.find().subscribe((categories) => {
      console.log(categories);
      this.setState({ categories });
    })
  }

  public render() {
    const buttons = this.state.categories.map((category, index) => {
      return <OrderCategoryButton key={index} category={category} />
    });
    return (
      <div style={{padding: '14px'}}>
        <h1>Welcome</h1>
        <h4>Ready to order your food? Select a category to get started.</h4>
        {buttons}
      </div>
    );
  }
}

export default OrderCategorySelection;
