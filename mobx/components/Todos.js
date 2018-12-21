class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.store = new TodoStore();
  }

  renderTodos() {
    return this.store.todos.map(todo => (
      <Todo
        todo={todo.todo}
        isDone={todo.isDone}
        toggleDone={this.store.handleDoneToggle(todo.id)}
      />
    ));
  }

  render() {
    return <div>{this.renderTodos}</div>;
  }
}
