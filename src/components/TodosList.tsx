import type { Todo } from '../types'
import TodoCard from './TodoCard'

type TodosListProps = {
  todos: Todo[]
  handleDeleteTodo: (todoId: Todo['id']) => void
  handleCompleteTodo: (
    todoId: Todo['id'],
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export default function TodosList({
  todos,
  handleDeleteTodo,
  handleCompleteTodo,
}: TodosListProps) {
  return (
    <div className="flex flex-col gap-6">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        ))
      ) : (
        <p>No todos</p>
      )}
    </div>
  )
}
