import type { Todo } from '../types'

type TodoCardProps = {
  todo: Todo
  handleDeleteTodo: (todoId: Todo['id']) => void
  handleCompleteTodo: (
    todoId: Todo['id'],
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export default function TodoCard({
  todo,
  handleDeleteTodo,
  handleCompleteTodo,
}: TodoCardProps) {
  return (
    <div className="relative flex justify-between items-center bg-white shadow-lg border p-4">
      <div
        className={`absolute -top-2 -left-2 text-white font-semibold px-2 ${
          todo.status === 'completed' ? 'bg-[#2EC4B6]' : 'bg-[#20A4F3]'
        }`}
      >
        {todo.status}
      </div>

      <h2>{todo.title}</h2>

      <div className="flex gap-2">
        <input
          type="checkbox"
          value={todo.completed ? 'on' : 'off'}
          onChange={(e) => handleCompleteTodo(todo.id, e)}
        />
        <button
          className="text-red-600 cursor-pointer"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
