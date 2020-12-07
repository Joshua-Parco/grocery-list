import React from 'react';

class GroceryForm extends React.Component {
  state = { name: '' }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name)
  }

  render () {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add An Item"
         />
      </form>
    )
  }
}

export default GroceryForm;
