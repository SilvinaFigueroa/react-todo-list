
import { useState, useReducer } from "react"
import todoList from "../assets/todoList_data.mjs"

function reducer(state, action){
  switch(action.type){
    case 
  }


}


const TodoList = () => {

  const [ taskList, dispatch] = useReducer(reducer, [])
  const [taskItem, setTaskItem] = useState('')

  function addItem(e) {
    e.preventDefault()
    dispatch({type : "addItem"})
    // After calling the reduce function with dispatch, clear out the taskItem
    setTaskItem('')
  }

  return (

    <>
      <form onSubmit={addItem}>
        <input type="text" value={taskItem}
          onChange={inputTask => setTaskItem(inputTask.target.value)}
          placeholder="Type here your task..." required />
        <input type="submit" value="Add" />
      </form>
    </>

  )
}

export default TodoList