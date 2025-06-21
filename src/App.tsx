import { useState } from 'react'
import Header from './components/Header'
import InputActions from './components/InputActions'
import TodosList from './components/TodosList'
import { todos as initialTodos } from './data/todos'
import type { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  return (
    <>
      <Header />

      <main className="max-w-7xl space-y-6 mx-auto p-4">
        <InputActions />

        <TodosList todos={todos} />
      </main>
    </>
  )
}

export default App
