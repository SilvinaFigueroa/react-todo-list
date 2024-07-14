
import { v4 as uuidv4 } from 'uuid';


// Reduce function passing the list of task and the action
function reducer(taskList, action) {
    switch (action.type) {

        case ("addTask"):
            taskList.map(task => console.log(`Reducer: each task on taskList` + JSON.stringify(task))) //Debugger line
            const newTask = { id: uuidv4(), task: action.payload.task, complete: false }
            // New task before the spread array to place the elements on the beginning of the list
            const updatedList = [newTask, ...taskList]
            return updatedList

        case ("completeCheck"):
            return taskList.map(task => {
                console.log(`Check id's completeCheck: ${task.id} -  ${action.payload.id}`) //Debugger line
                if (task.id === action.payload.id) {
                    console.log(`Task status before check : ${task.complete}`) //Debugger line
                    const updatedTask = { ...task, complete: !task.complete } // return a new task updated

                    console.log(`Updated Task : ${JSON.stringify(updatedTask)}`) //Debugger line

                    return updatedTask
                }
                console.log("Checkbox not updated") //Debugger line
                return task
            })

        case ("editTask"):
           return  taskList.map(task => {
            console.log(`Check id's edit task: ${task.id} -  ${action.payload.id}`) //Debugger line
                if (task.id === action.payload.id) {
                    console.log(`Task text before check : ${task.task}`) //Debugger line
                    const updatedTask = { ...task, task: action.payload.newTask }
                    console.log(`Updated Task : ${JSON.stringify(updatedTask)}`) //Debugger line
                    
                    return updatedTask
                }
                return task
            })

        default:
            return taskList
    }
}


export default reducer

