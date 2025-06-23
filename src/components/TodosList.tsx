import TodoCard from './TodoCard'
import { useTodo } from '../hooks/useTodo'

export default function TodosList() {
  const { state } = useTodo()

  const filteredTodos =
    state.filter === 'all'
      ? state.todos
      : state.todos.filter((todo) => todo.status === state.filter)

  return (
    <div className="flex flex-col gap-6">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      ) : (
        <p>No todos</p>
      )}
    </div>
  )
}
