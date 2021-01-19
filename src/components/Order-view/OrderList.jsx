import React from 'react';

const OrderList = (props) => (
  <li className="item-order">
    <p className="item-quantity">{props.itemProduct.quantity}</p>
    <p className="order-name">
      {props.itemProduct.description}
    </p>
    <p className="order-price">
      S/.
      {props.itemProduct.price}
    </p>
    <span
      className="material-icons order"
      onClick={() => (props.onDelete(props.itemProduct))}
    >
      delete_outline
    </span>

  </li>
);
export default OrderList;
