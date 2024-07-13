import { useState } from 'react'
import './App.css'

//Import data
import todoList from './assets/todoList_data.mjs'

//Import Components
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <TodoList/>
    </>

  )
}

export default App
