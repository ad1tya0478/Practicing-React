import React, {useState} from "react";

function TodoList(){

    const [tasks, setTask] = useState(["Eat BreakFast", "DO leetcode", "Learn React"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

        setNewTask(event.target.value)

    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    return(
        <div>
            <h1>To-Do List</h1>
            <div>
                <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange}/>
                <button onClick={addTask}>ADD</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Move-Up</button>
                        <button onClick={() => moveTaskDown(index)}>Move-Down</button>
                    </li>
                )}
            </ol>
        </div>
    )

}
export default TodoList