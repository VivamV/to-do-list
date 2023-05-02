import React from 'react'
import './style.css';

export const EachTodo = (props) => {
  
  return (
    <>
<div className=' my-3'>
<div className="card varcard" >
  <div className="card-body">
    <h2 className="card-title">{props.todos2.title}</h2>
    <p className="card-text">{props.todos2.desc}</p>
    <button class="vardelbtn" onClick={()=>{props.onRemove1(props.todos2)}}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Delete
</button>
  </div>
</div>
  </div>
    </>
  )
}


