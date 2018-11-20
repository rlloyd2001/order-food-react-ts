import * as React from 'react';
import './MenuItemButton.css';

class MenuItemButton extends React.Component {
  public props: Readonly<{ menuItem: IMenuItem }>;

  constructor(props: Readonly<{ menuItem: IMenuItem }>) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <button style={{ margin: '10px' }} type="button" className="btn btn-primary">
        {this.props.menuItem.title}<br/>
        <div className="menu-btn-description">{this.props.menuItem.description}</div>
      </button>
    );
  }
}

export default MenuItemButton;
