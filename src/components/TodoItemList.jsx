import { useState } from "react"

const TodoItemList = ({ task, dispatch }) => {
  const [taskUpdate, setTaskUpdate] = useState('')
  const [editButton, setEditButton] = useState(false)


  function editToggle() {
    setEditButton(!editButton)
    console.log(`editButton ${editButton}`)
  }

  function editTask(e) {
    e.preventDefault()
    dispatch({ type: "editTask", payload: { id: task.id , newTask : taskUpdate } })
    console.log(`dispatch function called inside editTask ${task.id} ${taskUpdate}`)
    // After calling the reduce function with dispatch, clear out the taskUpdate
    editToggle()
    setTaskUpdate('')
  }

  return (
    <>
      {editButton ? <>
        <form onSubmit={editTask}>
          <input type="text" value={taskUpdate} onChange={editedTask => setTaskUpdate(editedTask.target.value)}
            placeholder="Type here your task..." required />
          <button type="submit">Save</button>
          <button onClick={editToggle}>Cancel</button>
        </form>
      </> :
        <li>  {task.task} - {task.complete ? 'Completed' : 'Not Completed'}

          {/* A checkbox next to it which indicates whether it is "complete." */}
          <label htmlFor="status"> Task Completed </label>

          <input type="checkbox" name="status" id="status"
            checked={task.complete} // checkbox association with data
            onChange={() => {
              console.log('Checkbox clicked for task:', task.id) // Debugging log
              { dispatch({ type: "completeCheck", payload: { id: task.id } }) }
              console.log(`Dispatch function sent to reducer from TodoItemList component`)
            }} />

          {/* The "delete" button should be disabled unless the todo is complete! */}
          {task.complete ? <button id="delete">Delete</button> : null}

          {/* An "edit" button that replaces the todo string with a text input used to edit the todo. */}
          <button onClick={editToggle} id="edit">Edit</button>
          {/*Hint: bind the value of this text input to a piece of state so that 
    it is always accurate, even when first displayed! */}

          {/* When this text input is active, the "delete" and "edit" buttons should 
    be hidden, and a "save" button should appear. The "save" button should 
    save any changes made to the todo within the text input. */}


        </li>

      }
    </>
  )
}

export default TodoItemList