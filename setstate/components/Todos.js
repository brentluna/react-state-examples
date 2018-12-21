class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleDoneToggle = this.handleDoneToggle.bind(this);
  }
  renderTodos() {
    const { todos } = this.state;
    return todos.map(todo => (
      <Todo
        todo={todo.todo}
        isDone={todo.isDone}
        toggleDone={this.handleDoneToggle(todo.id, todo.isDone)}
      />
    ));
  }

  handleDoneToggle(id) {
    return () => {
      const { todos } = this.state;
      let newTodos = [...todos];
      newTodos = newTodos.map(el => {
        if (el.id === id) {
          return Object.assign({}, { isDone: !el.isDone }, el);
        }
        return el;
      });
      this.setState({ todos: newTodos });
    };
  }

  render() {
    return <div>{this.renderTodos}</div>;
  }
}
