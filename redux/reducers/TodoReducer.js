const TodoStore = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      let newTodos = [...state.todos];
      newTodos = newTodos.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, {isDone: !el.isDone}, el);
        }
        return el;
      })
      return newTodos;
     
    default:
      return state
  }
}

export default TodoStore;
