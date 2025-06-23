import TodoCard from './TodoCard'
import { useTodo } from '../hooks/useTodo'

export default function TodosList() {
  const { state } = useTodo()

  return (
    <div className="flex flex-col gap-6">
      {state.todos.length > 0 ? (
        state.todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      ) : (
        <p>No todos</p>
      )}
    </div>
  )
}
