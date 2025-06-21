import { useState } from 'react'
import Header from './components/Header'
import InputActions from './components/InputActions'
import { v4 as uuidv4 } from 'uuid'
import TodosList from './components/TodosList'
import type { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const [title, setTitle] = useState<string>('')

  const handleCompleteTodo = (
    todoId: Todo['id'],
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedTodos = []

    if (e.target.value == 'off') {
      updatedTodos = todos.map((t) =>
        t.id === todoId ? { ...t, completed: true, status: 'completed' } : t
      )
    } else {
      updatedTodos = todos.map((t) =>
        t.id === todoId ? { ...t, completed: false, status: 'pending' } : t
      )
    }

    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (todoId: Todo['id']) => {
    const filtered = todos.filter((t) => t.id !== todoId)

    setTodos(filtered)
  }

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

        <TodosList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </main>
    </>
  )
}

export default App
