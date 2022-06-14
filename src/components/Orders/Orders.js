import React from 'react';
import Order from '../Order/Order.js'
import './Orders.css';

const Orders = props => {
  const orderEls = props.orders.map(order => {
    return (
      <Order 
        name={order.name}
        ingredients={order.ingredients}
        id={order.id}
        key={order.id}
      />
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;