import TodoReducer from './../reducers/TodoReducer'
import TodosContainer from './../containers/TodosContainer'

const store  = createStore(TodoReducer);

render(
  <Provider store={store}>
    <TodosContainer />
  </Provider>,
  document.getElementById('root')
)
