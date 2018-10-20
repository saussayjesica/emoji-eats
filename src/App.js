import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import Order from './components/Order';
import { menuData } from './data/menuData';

class App extends Component {
  state = {
    order: [],
    total: 0
  };

  handleUpdate = (name, price) => {
    const newItem = { name, price };
    this.setState(({ order, total }) => ({
      order: [...order, newItem],
      total: total + price
    }));
  };

  resetOrder = () => {
    this.setState({
      order: [],
      total: 0
    });
  };

  submitOrder = () => {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(
      `Welcome to emoji eats. You have ordered ${this.state.order.map(
        item => item.name
      )}. This come to a total of ${this.state.total} dollars`
    );
    synth.speak(utterThis);
  };

  render() {
    const { order, total } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="menu">
          <div className="menu__wrapper">
            {menuData.map(item => (
              <MenuItem
                updateOrder={this.handleUpdate}
                emoji={item.emoji}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <Order
            order={order}
            total={total}
            handleResetClick={this.resetOrder}
            handleSubmitClick={this.submitOrder}
          />
        </div>
      </div>
    );
  }
}

export default App;
