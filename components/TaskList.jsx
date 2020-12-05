import React, { useContext } from 'react';
import { TaskListContext } from './../context/TaskListContext';
import { DeleteOutlined, CheckCircleTwoTone, RetweetOutlined } from '@ant-design/icons';


function TaskList() {
    const { Tasks, deleteTask, doneTask, returnTask } = useContext(TaskListContext);
    return (
        <ul>
            {Tasks.map(task => {
                return (
                    <div className="task" key={task.id}>
                        <h3 style={{marginRight: '40px'}}
                            className={task.completed ? 'doneTask' : null}
                        >{task.title}</h3>
                        <h3
                            style={{marginLeft: 'auto', marginRight: '10px'}}
                            className="icon"
                            onClick={() => deleteTask(task.id)}
                        >
                                {<DeleteOutlined />}
                        </h3>
                        {!task.completed ? <h3
                            className="icon"
                            onClick={() => returnTask(task.id)}
                        >
                            {<CheckCircleTwoTone />}
                        </h3> : <h3
                            className="icon"
                            onClick={() => doneTask(task.id)}
                        >
                            {<RetweetOutlined />}
                        </h3>}
                    </div>
                )
            })}
        </ul>
    )
}

export default TaskList