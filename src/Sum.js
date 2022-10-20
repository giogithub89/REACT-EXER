




export default function Sum(props) {
  
  const array = props.numbers
  
  
    return (
        
          <div>
            <h3> The sum is: {array.reduce((a,b)=> a = a+b) }</h3>
            
           
          </div>
          
      )
  
}


