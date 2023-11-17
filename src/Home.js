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

            </div>
        </>
    )
}

export default Home;