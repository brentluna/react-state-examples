import {toggleTodo} from './../actions '
import Todos from './../components/Todos';

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeTodos: state.todos.filter(el => !el.isDone),
  doneTodos: state.todos.filter(el => el.isDone)
})

const mapDispatchToProps = dispatch => ({
  handleDoneToggle: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
