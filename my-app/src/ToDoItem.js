import React from "react"
import "./index.css"

function toDoItem(props) {
    return (
        <div className="todo-item">

            <input type="checkbox" />
            <p>{props.name}</p>
        </div>
    )
}

export default toDoItem