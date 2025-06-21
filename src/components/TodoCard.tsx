import type { Dispatch } from 'react'
import type { Todo } from '../types'
import type { TodoActions } from '../reducers/todo-reducer'

type TodoCardProps = {
  todo: Todo
  dispatch: Dispatch<TodoActions>
}

export default function TodoCard({ todo, dispatch }: TodoCardProps) {
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
          checked={todo.completed}
          onChange={(e) =>
            dispatch({ type: 'toggle-todo', payload: { id: todo.id, e } })
          }
        />
        <button
          className="text-red-600 cursor-pointer"
          onClick={() =>
            dispatch({ type: 'delete-todo', payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
