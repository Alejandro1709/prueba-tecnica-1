import type { TodoActions } from '../reducers/todo-reducer'

type TodoFormProps = {
  title: string
  dispatch: React.Dispatch<TodoActions>
}

export default function TodoForm({ title, dispatch }: TodoFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: 'add-todo', payload: { title } })
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="bg-white p-2 border border-[#FF3366] w-[487px]"
        type="text"
        placeholder="Buy Milk"
        value={title}
        onChange={(e) =>
          dispatch({ type: 'set-title', payload: { title: e.target.value } })
        }
      />
      <button className="p-2 bg-[#FF3366] hover:bg-[#ff3366ec] text-white font-semibold rounded-md cursor-pointer">
        Save
      </button>
    </form>
  )
}
