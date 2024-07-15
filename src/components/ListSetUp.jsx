
import { useState } from 'react'
import TodoList from './TodoList'


const ListSetUp = () => {

    const [title, setTitle] = useState("")

    function createList(e){
        e.preventDefault()
        const newTitle = e.target.listTitle.value;
        setTitle(newTitle)
    }
  return (
    <>
    {title? <TodoList title={title}/> :
    <form onSubmit={createList}>
        <label htmlFor="listTitle">Add a Title for your List </label>
        <br/>
        <input type="text" id="listTitle" name="listTitle"/>
        <button type="submit">Create List</button>
    </form>
    }
    </>
  )
}

export default ListSetUp