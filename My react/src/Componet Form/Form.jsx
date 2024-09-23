import { useState } from "react";


function Form () {
const [firstName, setFirstName]=useState('');
 function  handleFirstName (e) {
    setFirstName(e.target.value);
    
 }
   
  
  return (
    <>
    <form >
    <div className="input"> 
    <label htmlFor="">First Name</label>
    <input type="text" name="first name" onChange={handleFirstName}/>
    </div>

    <input type="submit"value= "submit " className="button"/>
</form>
 <h1>Welcome: {firstName}</h1>
 </>
  )
}

export default Form
