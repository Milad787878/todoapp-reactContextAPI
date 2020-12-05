import React, { useState, useContext } from 'react';
import { Button } from 'antd';
import { TaskListContext } from './../context/TaskListContext';

function InputTask() {
    const InputStyle = {
        margin: '8px',
        borderRadius: '10px',
        height: '30px',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '12px',
        padding: '15px'
    }
    const { addTask } = useContext(TaskListContext)
    const [task, setTask] = useState('');


    const handleAddTask = () => {
        if (!task) return
        addTask(task);
        setTask('')
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTask()
        }
    }
    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                onKeyDown={handleKeyDown}
                style={InputStyle}
                placeholder="Enter your Task ..."
            />
            <Button
                type="primary"
                danger
                size="default"
                onClick={handleAddTask}
            >
            Add
            </Button>
        </div>
    )
}

export default InputTask;