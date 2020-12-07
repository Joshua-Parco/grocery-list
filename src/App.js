import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm'

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Chicken", complete: false, },
      { id: 2, name: "Rice", complete: true, },
      { id: 3, name: "Broccoli", complete: false, },
    ]
  };

  render() {
    const { groceries } = this.state;

    return (
      <div>
        <GroceryForm />
        <List name="Grocery List" items={groceries} />
      </div>
    );
  }
}

export default App;
