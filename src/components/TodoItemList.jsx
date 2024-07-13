
import reducer from "../state/taskReducer";

const TodoItemList = ({task}) => {
  return (
    <>

    <li>{task.task}
    {/* console.log('Task passed to TaskList Component') */}

    {/* A checkbox next to it which indicates whether it is "complete." */}
    <label for="status"> Task Completed </label>
    <input type="checkbox" name="status" id="status"/>
    {/* The "delete" button should be disabled unless the todo is complete! */}
    <button>Delete</button>
    {/* An "edit" button that replaces the todo string with a text input used to edit the todo. */}
    <button>Edit</button>
    {/*Hint: bind the value of this text input to a piece of state so that 
    it is always accurate, even when first displayed! */}

    {/* When this text input is active, the "delete" and "edit" buttons should 
    be hidden, and a "save" button should appear. The "save" button should 
    save any changes made to the todo within the text input. */}

    <button>Save</button>
    </li>
    </>
  )
}

export default TodoItemList