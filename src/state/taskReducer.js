
import { v4 as uuidv4 } from 'uuid';


// Reduce function passing the list of task and the action
function reducer(taskList, action) {
    switch (action.type) {
      case ("addItem"):
        const updatedList = [...taskList, taskList.unshift({ id: uuidv4(), task: action.payload.task, complete: false })]
        console.log(`Task added to taskList${action.payload.task}`)
        return updatedList
  
      default:
        return taskList;
    }
  }
  
//   // Helper function to create a new task
//   function newTask(taskItem) {
//     return { id: uuidv4(), task: action.payload.task, complete: false }
//   }

  export default reducer

