
import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TodoList  tasks= {['task1', 'task2', 'task3']} />
        
      </div>
    );

  }
  
}

export default App;
