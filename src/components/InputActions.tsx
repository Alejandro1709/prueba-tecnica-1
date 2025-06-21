export default function InputActions() {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between">
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

      <select className="bg-white border p-2" name="filter" id="filter">
        <option value="">-- Select --</option>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}
