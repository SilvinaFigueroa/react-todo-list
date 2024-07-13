


const TodoItemList = ({listItem}) => {
  return (
    <>
    <div>TodoItemList</div>
    {/* A checkbox next to it which indicates whether it is "complete." */}
    <input type="checkbox">Complete</input>
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
    
    </>
  )
}

export default TodoItemList