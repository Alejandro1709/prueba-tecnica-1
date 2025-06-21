import TodoCard from './TodoCard'

export default function TodosList() {
  return (
    <div className="flex flex-col gap-6">
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  )
}
