import React from 'react'
import "../components/Task.css"

function Task(props) {
    return (
        // <div id='task-container' >
        //     {props.note} 

        //     <button id='task-button' onClick={props.onDelete} >Delete Task</button>
        // </div>

        <li className="task-item">
            <span className="task-text">{props.note}</span>
            <button className="task-delete-button" onClick={props.onDelete}>
                Delete Task
            </button>
        </li>

    )
}

export default Task