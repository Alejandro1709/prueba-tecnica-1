import type { Todo } from '../types'
import TodoCard from './TodoCard'

type TodosListProps = {
  todos: Todo[]
}

export default function TodosList({ todos }: TodosListProps) {
  return (
    <div className="flex flex-col gap-6">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
