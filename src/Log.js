import React from "react";
import { useState } from "react";

function Log() {
   
    const [data, setData] = useState({
      username: '',
      password:'',
      checkbox: false
    });
    

    function handleInputName(event){
      const {name, value, type, checked} = event.target
      setData({
        [name]: type === 'checkbox' ? checked : value
      })
    }

  
    
        return (
          <div>
            {/* <Welcome username={username} /> */}
            <div className="field">
              <label for="username">Username</label>
              <input
                name="username"
                value={data.username}
                onChange={handleInputName}
              />
              <label for="password">Password</label>
              <input name="password"  type="password" value={data.password} onChange={handleInputName}/>
              <input  type='checkbox' checked={data.checkbox} onChange={handleInputName}/>
            </div>
          </div>
        );
    
}

export default Log



// class  Welcome extends React.Component {
//   render(){
//     return (
//         <div>
//             <h2>
//                 Welcome, {this.props.username}
//             </h2>
    
//         </div>
//       )
//   }
// }
