import React, {useState} from "react";


function Home(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if(task.trim() !== ''){
            setTasks([...tasks, task])
            setTask('')
        }
    }

    const deleteTask = (index) => {
        const updateTasks = [...tasks]
        updateTasks.splice(index, 1)
        setTasks(updateTasks)
    }


    return(
        <>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="what's next" 
                />
                <button onClick={addTask}>Add</button>
                <ul>
                    {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home;