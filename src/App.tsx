import { useEffect, useReducer } from 'react'
import Header from './components/Header'
import InputActions from './components/InputActions'
import TodosList from './components/TodosList'
import { initialState, todoReducer } from './reducers/todo-reducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])

  return (
    <>
      <Header />

      <main className="max-w-7xl space-y-6 mx-auto p-4">
        <InputActions title={state.title} dispatch={dispatch} />

        <TodosList todos={state.todos} dispatch={dispatch} />
      </main>
    </>
  )
}

export default App
