import * as React from 'react';
import OrderCategoryMenu from '../order-category-menu/OrderCategoryMenu';
import OrderCategorySelection from '../order-category-selection/OrderCategorySelection';
import { OrderCategoryStore } from '../store-services/OrderCategoryStore';

class MainPage extends React.Component {
  public state: Readonly<{ categorySelected: boolean }> = { categorySelected: false };

  constructor(props: Readonly<{}>) {
    super(props);
    OrderCategoryStore.initialize();
  }

  public componentDidMount() {
    OrderCategoryStore.selectedCategoryId.subscribe((id) => {
      this.setState({ categorySelected: !!id });
    });
  }

  public render() {
    if (this.state.categorySelected) {
      return ( <OrderCategoryMenu /> );
    }
    return (
      <OrderCategorySelection />
    );
  }
}

export default MainPage;
