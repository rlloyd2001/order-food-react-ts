import * as React from 'react';
import { takeWhile } from 'rxjs/operators';
import { StoreServices } from '../store-services/StoreServices';
import MenuItemButton from './MenuItemButton';

class OrderCategoryMenu extends React.Component {
  public state: Readonly<{ menuItems: IMenuItem[] }> = { menuItems: [] };
  private mounted = true;
  private store = StoreServices.store.orderCategory;

  constructor(props: Readonly<{}>) {
    super(props);
  }

  public componentDidMount() {
    this.store.menuItems.pipe(
      takeWhile(() => this.mounted)
    ).subscribe((menuItems) => {
      this.setState({ menuItems });
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
      <div>
        <div className="border" style={{width: '100%', padding: '14px', display: 'inline-block'}}>
          <button style={{float: 'left'}} type="button" className="btn btn-secondary" onClick={selectOtherCategory}>Back</button>
        </div>
        {menuItems}
      </div>
    );
  }
}

export default OrderCategoryMenu;
