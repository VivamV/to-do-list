import React from 'react'
import { EachTodo } from './EachTodo'

export const Todolist = (props) => {
  return (
    <>    
    <div className='container  varcontainer' >
    <h3 className=' my-3'>Your To-Do List</h3>
    {/* conditional statement */}
    {props.todos1.length===0?"":
    props.todos1.map((todo)=>{
    return (<>
    <EachTodo todos2={todo} key={todo.sno} onRemove1={props.onRemove}/>
    </> )
    })
    }
    </div>
    </>
  )
}
