type TodoFormProps = {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: () => void
}

export default function TodoForm({
  title,
  setTitle,
  handleAddTodo,
}: TodoFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleAddTodo()
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="bg-white p-2 border border-[#FF3366] w-[487px]"
        type="text"
        placeholder="Buy Milk"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="p-2 bg-[#FF3366] hover:bg-[#ff3366ec] text-white font-semibold rounded-md cursor-pointer">
        Save
      </button>
    </form>
  )
}
