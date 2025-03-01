import React, { Component } from 'react';
import './App.css';
import {getOrders, submitOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    }
  }

  newOrder = (name, ingredients) => {
    submitOrder(name, ingredients)
    .then(() => 
      getOrders()
        .then(response => this.setState( {orders: response.orders} ))
        .catch(err => console.error('Error fetching:', err))
    )
  }

  componentDidMount() {
    getOrders()
      .then(response => this.setState( {orders: response.orders} ))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm newOrder={this.newOrder}/>
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
