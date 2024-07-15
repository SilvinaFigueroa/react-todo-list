import { useState } from 'react'
import './App.css'

//Import data
import todoList from './assets/todoList_data.mjs'

//Import Components
import ListSetUp from './components/ListSetUp'

function App() {

  return (
    <>
      <h1>Todo List Application</h1>
        <ListSetUp/>
    </>

  )
}

export default App
