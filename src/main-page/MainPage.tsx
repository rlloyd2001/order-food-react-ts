import * as React from 'react';
import OrderCategoryMenu from '../order-category-menu/OrderCategoryMenu';
import OrderCategorySelection from '../order-category-selection/OrderCategorySelection';
import { StoreInitializer } from '../store-services/StoreInitializer';
import { StoreServices } from '../store-services/StoreServices';

class MainPage extends React.Component {
  public state: Readonly<{ categorySelected: boolean }> = { categorySelected: false };

  constructor(props: Readonly<{}>) {
    super(props);
    StoreInitializer.initialize(...StoreServices.stores);
  }

  public componentDidMount() {
    StoreServices.store.orderCategory.selectedCategoryId.subscribe((id) => {
      this.setState({ categorySelected: !!id });
    });
  }

  public render() {
    if (this.state.categorySelected) {
      return (<OrderCategoryMenu />);
    }
    return (
      <OrderCategorySelection />
    );
  }
}

export default MainPage;
