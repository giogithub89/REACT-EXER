
import React from 'react';
import './App.css';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

class App extends React.Component {
  state = {
    language: 'en'
  }
  handleLanguage=(event)=>{
    this.setState({
      language: event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value='en'>English</option>
          <option value='it'>Italian</option>
        </select>
        {/* <LanguageContext value={this.state.language}>
          <DisplayLanguage/>

        </LanguageContext> */}
        
      </div>
    );
  }
}

export default App;
