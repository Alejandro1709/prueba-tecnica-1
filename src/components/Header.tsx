import { useTodo } from '../hooks/useTodo'

export default function Header() {
  const { dispatch } = useTodo()

  return (
    <header className="flex justify-center items-center bg-[#011627] h-16 text-white">
      <div className="flex justify-between items-center w-full mx-6">
        <h2 className="text-2xl font-semibold text-[#FF3366]">My todos</h2>

        <button
          className="py-2 px-3 bg-[#FF3366] hover:bg-[#ff3366ec] text-white font-semibold rounded-md cursor-pointer"
          onClick={() => dispatch({ type: 'clear-todos' })}
        >
          Clear
        </button>
      </div>
    </header>
  )
}
