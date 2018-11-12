import * as React from 'react';
import { takeWhile } from 'rxjs/operators';
import { OrderCategoryStore } from '../store-services/OrderCategoryStore';
import MenuItemButton from './MenuItemButton';

class OrderCategoryMenu extends React.Component {
  public state: Readonly<{ menuItems: IMenuItem[] }> = { menuItems: [] };
  private mounted = true;

  constructor(props: Readonly<{}>) {
    super(props);
  }

  public componentDidMount() {
    OrderCategoryStore.menuItems.pipe(
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

    return (
      <div>
        <div className="border" style={{width: '100%', padding: '14px', display: 'inline-block'}}>
          <button style={{float: 'left'}} type="button" className="btn btn-secondary" onClick={this.selectOtherCategory}>Back</button>
        </div>
        {menuItems}
      </div>
    );
  }

  private selectOtherCategory() {
    OrderCategoryStore.selectedCategoryId.next('');
  }
}

export default OrderCategoryMenu;
