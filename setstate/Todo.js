const Todo = ({todo, isDone, toggleDone }) => (
  <div>
    <div>{todo}</div>
    <div onClick={toggleDone}>{isDone ? "Complete" : ''}</div>
  </div>
)
