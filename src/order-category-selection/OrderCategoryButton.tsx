import * as React from 'react';
import './OrderCategoryButton.css';

export default function OrderCategoryButton(props: Readonly<{ category: IOrderCategory }>) {
  return <button type="button" className="btn btn-primary btn-lg category-button">
    {props.category.title}
  </button>;
}