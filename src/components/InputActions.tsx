import type { TodoActions } from '../reducers/todo-reducer'
import TodoForm from './TodoForm'

type InputActionsProps = {
  title: string
  dispatch: React.Dispatch<TodoActions>
}

export default function InputActions({ title, dispatch }: InputActionsProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between">
      <TodoForm title={title} dispatch={dispatch} />

      <select className="bg-white border p-2" name="filter" id="filter">
        <option value="">-- Select --</option>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}
