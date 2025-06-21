import type { Todo } from '../types'

type TodoCardProps = {
  todo: Todo
}

export default function TodoCard({ todo }: TodoCardProps) {
  return (
    <div className="relative flex justify-between items-center bg-white shadow-lg border p-4">
      <div className="absolute -top-2 -left-2 text-white font-semibold px-2 bg-[#20A4F3]">
        {todo.status}
      </div>

      <h2>{todo.title}</h2>

      <div className="flex gap-2">
        <input type="checkbox" />
        <button className="text-red-600 cursor-pointer">Delete</button>
      </div>
    </div>
  )
}
