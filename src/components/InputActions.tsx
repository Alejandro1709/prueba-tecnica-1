import TodoForm from './TodoForm'

type InputActionsProps = {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: () => void
}

export default function InputActions({
  title,
  setTitle,
  handleAddTodo,
}: InputActionsProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between">
      <TodoForm
        title={title}
        setTitle={setTitle}
        handleAddTodo={handleAddTodo}
      />

      <select className="bg-white border p-2" name="filter" id="filter">
        <option value="">-- Select --</option>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}
