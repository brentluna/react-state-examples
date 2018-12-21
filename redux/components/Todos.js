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

import TodoReducer from './../reducers/TodoReducer'
const store  = createStore(TodoReducer);

render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('root')
)
