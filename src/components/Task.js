import React from 'react'
import "../components/Task.css"

function Task(props) {
    return (
        <div id='task-container' >
            {props.note}
            <button id='task-button' onClick={props.onDelete} >Delete Task</button>
        </div>
    )
}

export default Task