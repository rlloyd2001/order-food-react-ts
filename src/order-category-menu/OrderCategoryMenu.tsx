import * as React from 'react';
import { takeWhile } from 'rxjs/operators';
import { StoreServices } from '../store-services/StoreServices';
import MenuItemButton from './MenuItemButton';
import './OrderCategoryMenu.css';

class OrderCategoryMenu extends React.Component {
  public state: Readonly<{ menuItems: IMenuItem[], title: string }> = { menuItems: [], title: '' };
  private mounted = true;
  private store = StoreServices.store.orderCategory;

  constructor(props: Readonly<{}>) {
    super(props);
  }

  public componentDidMount() {
    this.store.menuItems.pipe(
      takeWhile(() => this.mounted),
    ).subscribe((menuItems) => {
      this.setState({ menuItems });
    });
    this.store.selectedCategory.pipe(
      takeWhile(() => this.mounted),
    ).subscribe((category) => {
      this.setState({ title: category.title });
    });
  }

  public componentWillUnmount() {
    this.mounted = false;
  }

  public render() {
    const menuItems = this.state.menuItems.map((menuItem, index) => {
      return <MenuItemButton key={index} menuItem={menuItem}/>;
    });
    const store = this.store;

    function selectOtherCategory() {
      store.selectedCategoryId.next('');
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <div className="border" style={{ width: '100%', padding: '14px', display: 'inline-block' }}>
          <button style={{ float: 'left' }} type="button" className="btn btn-secondary" onClick={selectOtherCategory}>
            Back
          </button>
          <div className="title">{this.state.title}</div>
        </div>
        {menuItems}
      </div>
    );
  }
}

export default OrderCategoryMenu;
