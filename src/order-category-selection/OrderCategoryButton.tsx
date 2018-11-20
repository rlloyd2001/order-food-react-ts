import * as React from 'react';
import { StoreServices } from '../store-services/StoreServices';
import './OrderCategoryButton.css';

export default (props: Readonly<{ category: IOrderCategory }>) => {
  function selectCategory() {
    StoreServices.store.orderCategory.selectedCategoryId.next(props.category.id);
  }

  return <button type="button" className="btn btn-primary btn-lg category-button" onClick={selectCategory}>
    {props.category.title}
  </button>;
};
