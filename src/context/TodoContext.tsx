import { createContext, useReducer, type Dispatch } from 'react'
import {
  todoReducer,
  initialState,
  type TodoState,
  type TodoActions,
} from '../reducers/todo-reducer'

type TodoContextProps = {
  state: TodoState
  dispatch: Dispatch<TodoActions>
}

export const TodoContext = createContext<TodoContextProps>(null!)

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
