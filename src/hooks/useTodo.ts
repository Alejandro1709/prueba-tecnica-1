import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider')
  }

  return context
}
