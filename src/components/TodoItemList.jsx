

const TodoItemList = ({task, dispatch}) => {
  return (
    <>
   <li>  {task.task} - {task.complete ? 'Completed' : 'Not Completed'}

    {/* A checkbox next to it which indicates whether it is "complete." */}
    <label htmlFor="status"> Task Completed </label>

    <input type="checkbox" name="status" id="status" 
    checked={task.complete} // checkbox assiciation with data
    onChange={()=> {
    console.log('Checkbox clicked for task:', task.id) // Debugging log
    {dispatch({type: "completeCheck", payload : {id :task.id}})}
    console.log(`Dispatch function sent to reducer from TodoItemList component`)
    }}/>

    {/* The "delete" button should be disabled unless the todo is complete! */}
    {task.complete ? <button id="delete">Delete</button> : null}

    {/* An "edit" button that replaces the todo string with a text input used to edit the todo. */}
    <button id="edit">Edit</button>
    {/*Hint: bind the value of this text input to a piece of state so that 
    it is always accurate, even when first displayed! */}

    {/* When this text input is active, the "delete" and "edit" buttons should 
    be hidden, and a "save" button should appear. The "save" button should 
    save any changes made to the todo within the text input. */}

    <button id="save">Save</button>

    
    </li>
    </>
  )
}

export default TodoItemList