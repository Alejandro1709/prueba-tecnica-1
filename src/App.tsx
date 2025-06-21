import { useState } from 'react'
import Header from './components/Header'
import InputActions from './components/InputActions'
import { v4 as uuidv4 } from 'uuid'
import TodosList from './components/TodosList'
import { todos as initialTodos } from './data/todos'
import type { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const [title, setTitle] = useState<string>('')

  const handleAddTodo = () => {
    if (!title) return

    const newTodo: Todo = {
      id: uuidv4(),
      title,
      status: 'pending',
      completed: false,
    }

    setTodos([...todos, newTodo])

    setTitle('')
  }

  return (
    <>
      <Header />

      <main className="max-w-7xl space-y-6 mx-auto p-4">
        <InputActions
          title={title}
          setTitle={setTitle}
          handleAddTodo={handleAddTodo}
        />

        <TodosList todos={todos} />
      </main>
    </>
  )
}

export default App
