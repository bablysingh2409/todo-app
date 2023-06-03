import './styles.css';
import { Component } from 'react';
import { List } from './List';
import { Form } from './Form';

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'Do the laundry' }, { text: 'Iron the clothes' }, { text: 'Go for a walk' }],
    };
  }

  // create handleAdd and handleRemove functions here
  handleAdd = (text) => {
    let data = this.state.todos;
    data.unshift({ text });
    this.setState({ todos: data });
  };

  handleRemove = (id) => {
    let todo = this.state.todos;
    todo.splice(id, 1);
    this.setState({ todos: todo });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form addTodo={this.handleAdd} />
        <List todos={this.state.todos} remove={this.handleRemove} />
      </div>
    );
  }
}
