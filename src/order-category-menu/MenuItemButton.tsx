import * as React from 'react';

class MenuItemButton extends React.Component {
  public props: Readonly<{ menuItem: IMenuItem }>;

  constructor(props: Readonly<{ menuItem: IMenuItem }>) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <button style={{margin: '10px'}} type="button" className="btn btn-primary">{this.props.menuItem.title}</button>
    );
  }
}

export default MenuItemButton;