import * as React from 'react';
import { OrderCategoryStore } from '../store-services/OrderCategoryStore';
import './OrderCategoryButton.css';

export default function OrderCategoryButton(props: Readonly<{ category: IOrderCategory }>) {
  function selectCategory() {
    OrderCategoryStore.selectedCategoryId.next(props.category.id);
  }

  return <button type="button" className="btn btn-primary btn-lg category-button" onClick={selectCategory}>
    {props.category.title}
  </button>;
}