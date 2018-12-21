class Todos extends React.Component {

  renderTodos() {
    const {todos, handleDoneToggle} = this.props;
    return todos.map(todo => (
      <Todo
        todo={todo.todo}
        isDone={todo.isDone}
        toggleDone={() => handleDoneToggle(todo.id)}
      />
    ));
  }

  render() {
    return <div>{this.renderTodos}</div>;
  }
}
