
import { useState, useReducer, act } from "react"
import reducer from "../state/taskReducer";

import TodoitemList from './TodoItemList'

// Testing the reduce hook with the initial state data
import todoList from "../assets/todoList_data.mjs"
const initialState = todoList;


const TodoList = ({title}) => {
  // const [taskList, dispatch] = useReducer(reducer, initialState)
  const [taskList, dispatch] = useReducer(reducer, [])
  const [taskItem, setTaskItem] = useState("")

  function addTask(e) {
    e.preventDefault()
    console.log('addTask function called')
    // passing the taskItem from the form as payload in the dispach function
    dispatch({ type: "addTask", payload: { task: taskItem } })
    console.log('dispatch function called inside addItem')
    // After calling the reduce function with dispatch, clear out the taskItem
    setTaskItem('')
  }

  return (

    <>
      <h2>{title}</h2>
      {/* Input form for adding each task */}
      <form onSubmit={addTask}>
        <input type="text" value={taskItem} onChange={inputTask => setTaskItem(inputTask.target.value)}
          placeholder="Type here your task..." required />
        <button type="submit">Add</button>
      </form>
      
      {/* Send each task to the TodoItemList for displaying */}
      <ul>
        {taskList.map((task) => {
        console.log('each task passed to itemList component', task);
        // pass the dispatch function to be able to modify the task state
          return <TodoitemList key={task.id} task={task} dispatch={dispatch}/>;
          
        })}
      </ul>
    </>

  )
}

export default TodoList

//TODO -> SOLVE THE ISSUE WITH THE DUPLICATE EMPTY TASK