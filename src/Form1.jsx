import React, { useState } from 'react'
import "./App.css"
const Form1 = () => {
    const [value, setValue] = useState({
        email:"",
        password:""
    })
    const handelChange =(e)=>{
        const { name } = e.target;
        setValue({...value, [name]:e.target.value})
     
    }
    return (
        <div>
            <form className="form1">
                <h1>Sign up Page</h1>
                <input type="text"  name="email" value={value.email} onChange={handelChange} placeholder="Email Address..."></input>
                <input type="text" name="password"  value={value.password} onChange={handelChange} placeholder="Enter Password..."></input>
                <input onClick={(e)=>{
                    e.preventDefault();
                    console.log(value)
                }} type="submit" />
            </form>

        </div>
    )
}

export default Form1