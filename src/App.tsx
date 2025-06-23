import { useEffect } from 'react'
import Header from './components/Header'
import InputActions from './components/InputActions'
import TodosList from './components/TodosList'
import { useTodo } from './hooks/useTodo'

function App() {
  const { state } = useTodo()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])

  return (
    <>
      <Header />

      <main className="max-w-7xl space-y-6 mx-auto p-4">
        <InputActions />

        <TodosList />
      </main>
    </>
  )
}

export default App
