import React, { Component } from 'react';
import List from './List';

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
      <List name="Grocery List" items={groceries} />
    );
  }
}

export default App;
