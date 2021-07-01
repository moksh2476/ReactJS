import React from "react"
import ToDoItem from "./ToDoItem"
import "./index.css"

// import toDoItem from "./ToDoItem"
// import Header from "./Header"

//in classes, when you use props, you should do this.props

class App extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <ToDoItem
                    name="This is item 1" />
                <ToDoItem
                    name="This is item 2" />
                <ToDoItem
                    name="This is item 3" /> 
            </div>
        )
    }
}

export default App