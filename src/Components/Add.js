import React,{useState} from 'react'
import './style.css'

export const Add = (props) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    // submit function which runs whwn we submit form
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc)
      {alert("Title or description can't be blank");}
     else{
      props.addthis(title,desc);
        }
     //make them empty again 
    setTitle("");
    setDesc("");
    }

  return (
    <>  
   <div className="container my-3">
    <h2> Todo List App</h2>
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label"> Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" 
            aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label"> Description</label>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" class="vardelbtn" >
  <span></span>
  <span></span>
  <span></span>
  <span></span>
 Submit
</button>
    </form>
</div>
  </>
   
  )
}
