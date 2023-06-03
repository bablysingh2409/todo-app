import { Component } from 'react';

export class Todo extends Component {
  render() {
    let { remove, id } = this.props;
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={() => remove(id)}>x</button>
      </div>
    );
  }
}
