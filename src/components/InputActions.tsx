import TodoForm from './TodoForm'

export default function InputActions() {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between">
      <TodoForm />

      <select className="bg-white border p-2" name="filter" id="filter">
        <option value="">-- Select --</option>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}
