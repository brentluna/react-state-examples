class TodoStore {
  constructor(todos) {
    super();
    @observable this.todos = todos || [];
  }

  @action handleDoneToggle(id) {
    return () => {
      let newTodos = [...this.todos];
      newTodos = newTodos.map(el => {
        if (el.id === id) {
          return Object.assign({}, {isDone: !el.isDone}, el);
        }
        return el;
      })
      this.todos = newTodos
    }
  }

  // not used in other examples, but a basic example of  computed, a memoized value that responds to changes in observables
  @computed doneTodos() {
    return this.todos.filter(el => el.isDone);
  }

  @computed activeTodos() {
    return this.todos.filter(el => !el.isDone);
  }

}
