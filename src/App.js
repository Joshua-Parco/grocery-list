import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import Grocery from './Grocery';

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Chicken", complete: false, },
      { id: 2, name: "Rice", complete: true, },
      { id: 3, name: "Broccoli", complete: false, },
    ]
  };

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map ( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqId() , complete: false }
    this.setState({ groceries: [grocery, ...groceries] });
  }

  render() {
    const { groceries } = this.state;

    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={groceries} groceryClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
