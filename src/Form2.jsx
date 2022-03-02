import React from 'react'
import Contact from "./Contact"
const Form2 = (props) => {
  return (
    <div>{props.contact.map((contact)=>{
        return (
            <div>
                <Contact contact={contact}/>
            </div>
        )
    })}</div>
  )
}

export default Form2