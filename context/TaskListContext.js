import React, { useState, createContext } from 'react';
import { v1 as uuid } from 'uuid';

export const TaskListContext = createContext([]);

function TaskListContextProvider(props) {
    const [Tasks, setTasks] = useState([])
    const addTask = title => {
        setTasks([...Tasks, { title, id: uuid(), completed: false}])
    }
    const deleteTask = id => {
        setTasks(Tasks.filter(task => task.id !== id));
    }
    const doneTask = id => {
        const newTasks = [...Tasks];
        for(let i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id === id) {
                newTasks[i].completed = !newTasks[i].completed
                console.log('after finding target task: ', newTasks)
            }
        }
        console.log('after for of doneTask function : ', newTasks)
        setTasks(newTasks)
    }
    const returnTask = id => {
        const newTasks = [...Tasks];
        for(let i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id === id) {
                newTasks[i].completed = !newTasks[i].completed
            }
        }
        console.log(newTasks)
        setTasks(newTasks)
        console.log('from return Task : ', Tasks)
    }
    return(
        <TaskListContext.Provider value={{Tasks, addTask, deleteTask, doneTask, returnTask}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;