import * as React from 'react';
import { StoreServices } from '../store-services/StoreServices';
import OrderCategoryButton from './OrderCategoryButton';

class OrderCategorySelection extends React.Component {
  public state: Readonly<{ categories: IOrderCategory[] }> = { categories: [] };

  constructor(props: Readonly<{}>) {
    super(props);
  }

  public componentDidMount() {
    StoreServices.store.orderCategory.categories.subscribe((categories) => {
      this.setState({ categories });
    });
  }

  public render() {
    const buttons = this.state.categories.map((category, index) => {
      return <OrderCategoryButton key={index} category={category} />
    });
    return (
      <div style={{padding: '14px'}}>
        <h1 style={{paddingLeft: '20px'}}>Welcome</h1>
        <h4 style={{paddingLeft: '20px'}}>Ready to order your food? Select a category to get started.</h4>
        {buttons}
      </div>
    );
  }
}

export default OrderCategorySelection;
