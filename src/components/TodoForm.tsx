export default function TodoForm() {
  return (
    <form className="flex gap-2">
      <input
        className="bg-white p-2 border border-[#FF3366] w-[487px]"
        type="text"
        placeholder="Buy Milk"
      />
      <button className="p-2 bg-[#FF3366] hover:bg-[#ff3366ec] text-white font-semibold rounded-md cursor-pointer">
        Save
      </button>
    </form>
  )
}
