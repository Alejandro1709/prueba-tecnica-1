import type { Todo } from '../types'
import { v4 as uuidv4 } from 'uuid'

export type TodoActions =
  | { type: 'set-title'; payload: { title: string } }
  | { type: 'add-todo'; payload: { title: Todo['title'] } }
  | {
      type: 'toggle-todo'
      payload: { id: Todo['id']; e: React.ChangeEvent<HTMLInputElement> }
    }
  | { type: 'delete-todo'; payload: { id: Todo['id'] } }
  | { type: 'clear-todos' }
  | { type: 'add-filter'; payload: { filter: string } }

export type TodoState = {
  title: string
  todos: Todo[]
  filter: string
}

const todosFromStorage = (): Todo[] => {
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}

export const initialState: TodoState = {
  title: '',
  todos: todosFromStorage(),
  filter: 'all',
}

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoActions
) => {
  if (action.type === 'set-title') {
    return {
      ...state,
      title: action.payload.title,
    }
  }

  if (action.type === 'add-todo') {
    const newTodo: Todo = {
      id: uuidv4(),
      title: action.payload.title,
      completed: false,
      status: 'pending',
    }

    return {
      ...state,
      todos: [...state.todos, newTodo],
      title: '',
    }
  }

  if (action.type === 'toggle-todo') {
    let updatedTodos = []

    if (action.payload.e.target.value == 'off') {
      updatedTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...t, completed: true, status: 'completed' }
          : t
      )
    } else {
      updatedTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...t, completed: false, status: 'pending' }
          : t
      )
    }

    return {
      ...state,
      todos: updatedTodos,
    }
  }

  if (action.type === 'delete-todo') {
    const filtered = state.todos.filter((t) => t.id !== action.payload.id)

    return {
      ...state,
      todos: filtered,
    }
  }

  if (action.type === 'clear-todos') {
    return {
      ...state,
      todos: [],
      title: '',
    }
  }

  if (action.type === 'add-filter') {
    return {
      ...state,
      filter: action.payload.filter,
    }
  }

  return state
}
