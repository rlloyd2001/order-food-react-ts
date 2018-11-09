import * as React from 'react';
import { OrderCategoryStore } from '../store-services/OrderCategoryStore';

class OrderCategoryMenu extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  public render() {
    function selectOtherCategory() {
      OrderCategoryStore.selectedCategoryId.next('');
    }

    return (
      <div className="border" style={{width: '100%', padding: '14px', display: 'inline-block'}}>
        <button style={{float: 'left'}} type="button" className="btn btn-secondary" onClick={selectOtherCategory}>Back</button>
      </div>
    );
  }
}

export default OrderCategoryMenu;
