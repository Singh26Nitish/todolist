import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faX } from "@fortawesome/free-solid-svg-icons";

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
            <div className="h-screen bg-dark flex  justify-center text-white font-Robot">
                <div className="flex flex-col mt-2 w-25 ">
                    <h1 className="text-brite text-6xl m-12 p-5 font-bold ">to do list</h1>
                    <ul className="m-2">
                        {tasks.map((task, index) => (
                        <li key={index}><FontAwesomeIcon icon={faSquare} className="bg-dark text-brite mr-3 flex-1" />
                            {task} <button onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faX} className="text-white ml-2"/></button>
                        </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="what's next" 
                        className="bg-dark text-white w-20 mx-auto my-5"
                    />
                    <button onClick={addTask} className="rounded-md bg-brite w-14 h-8 mx-auto px-3">Add</button>
                </div>    
            </div>
        </>
    )
}

export default Home;