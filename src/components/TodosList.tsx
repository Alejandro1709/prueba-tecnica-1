import type { Dispatch } from 'react'
import type { Todo } from '../types'
import TodoCard from './TodoCard'
import type { TodoActions } from '../reducers/todo-reducer'

type TodosListProps = {
  todos: Todo[]
  dispatch: Dispatch<TodoActions>
}

export default function TodosList({ todos, dispatch }: TodosListProps) {
  return (
    <div className="flex flex-col gap-6">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      ) : (
        <p>No todos</p>
      )}
    </div>
  )
}
