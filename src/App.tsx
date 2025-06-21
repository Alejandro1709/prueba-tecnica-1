import Header from './components/Header'
import InputActions from './components/InputActions'
import TodosList from './components/TodosList'

function App() {
  return (
    <>
      <Header />

      <main className="max-w-7xl space-y-6 mx-auto p-4">
        <InputActions />

        <TodosList />
      </main>
    </>
  )
}

export default App
