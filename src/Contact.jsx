import React from 'react'

const Contact = (props) => {
    const {id,name,email} = props.contact
  return (
    <div><div>
    <h3>{id}</h3>
    <h3>{name}</h3>
    <h3>{email}</h3>
</div></div>
  )
}

export default Contact