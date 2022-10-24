import React from 'react'

export class TodoList extends React.Component {
  state = {
    todos: [],
  };

  handleAddTask = (event) => {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    //update the state input field
    this.setState((state) => {
			return {
				todos: [...state.todos, todo],
        //[todo]:''
			}
		})
  };
  //  componentDidUpdate(event){
  //   const todo = event.target.elements.todo.value;

  //   this.setState((state) => {
	// 		return {
  //       [todo]:''
	// 		} 

  //  })
  // }
  

  render() {
    return (
      <div>

      <form onSubmit={this.handleAddTask}>
        <input data-testid="todo-input" name='todo'></input>
        <button type='submit'>Add Task</button>
        
      </form>
      <ul>
        
        {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      </div>
    );
  }
}

// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. 
// The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. 
// When the button is clicked, the event handler should add the value of the input tag to the items array.
