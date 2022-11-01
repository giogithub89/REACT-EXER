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
        
			}
		})
  };
  reset = () => {
    this.setState(() => { 
      console.log('reset')
      return{
        todos:[]
      }

    } )
  }

  handleDeleteItem = (index) => {
    let newList = this.state.todos
    newList.splice(index, 1);
    this.setState({ items: newList })
}

  render() {
    return (
      <div>

      <form onSubmit={this.handleAddTask}>
        <input data-testid="todo-input" name='todo'></input>
        <button type='submit'>Add Task</button>
        
        
      </form>
      <button onClick={this.reset} type="reset" >Reset</button>
      <ul>
        
        {this.state.todos.map((todo, index) => <li key={index}>{todo}
        <button key={index} onClick={this.handleDeleteItem.bind(this, index)}>Remove item</button>
        </li>)}
      </ul>

      </div>
    );
  }
}

// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. 
// The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. 
// When the button is clicked, the event handler should add the value of the input tag to the items array.
