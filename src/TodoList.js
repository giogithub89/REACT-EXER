import React from 'react'

export class TodoList extends React.Component {

    constructor(props){
        super(props)
        this.state = {tasks: ['task1', 'task2', 'task3']}
    }

    // state = {
    //     tasks: ['task1', 'task2', 'task3']

    // }
    inputList = (event) => {
        const value = event.target.task
        this.state({task: value})
        console.log(value)
    }
    handleAddTask = (event)=>{
        
        const inputList = this.event.target.task
        //update the state input field
        this.setState({ newTask: inputList})
        this.state.tasks.push(this.state.newTask)
        
    }
  

    render(){
        const elements = this.props.tasks.map(item => <li>{item}</li>)
        return (
            <div>
                <ul>
                    {elements}
                    <input name="inputList" value={this.state.task} onChange={this.inputList}/>
                    
                    <button onClick={this.handleAddTask}>Add Task</button>
                </ul>
            </div>
          )

    }
  
}

// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. 
// The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. 
// When the button is clicked, the event handler should add the value of the input tag to the items array.
