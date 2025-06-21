export default function TodoCard() {
  return (
    <div className="relative flex justify-between items-center bg-white shadow-lg border p-4">
      <div className="absolute -top-2 -left-2 text-white font-semibold px-2 bg-[#20A4F3]">
        Pending
      </div>

      <h2>Clean my room</h2>

      <input type="checkbox" />
    </div>
  )
}
