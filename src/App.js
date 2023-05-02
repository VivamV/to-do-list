import React,{useState,useEffect} from 'react';
import { Todolist } from './Components/Todolist';
import { Add } from './Components/Add';


function App() 
{
     //saving in localstorage to get old todo list when you refresh the page
     let var1;
     if(localStorage.getItem("todos")===null)
     {
       var1=[];
     }
     else
     {
       var1=JSON.parse(localStorage.getItem("todos"));
     }
  
     const [todos,setTodos]=useState(var1);
      //function1-add item when you submit the form
     const addthis=(title,desc)=>{
      let sno;
      if(todos.length===0)
      {sno=0;}
      else{ 
      sno=todos[todos.length-1].sno+1;
          }
      let newtodos=[...todos];
      newtodos.push({
        sno:sno,
        title:title,
        desc:desc
      });
      setTodos(newtodos);
    
    }

    //function2-to delete item if we click delete button
    const  onRemove=(todos1)=>{
    setTodos(todos.filter((e)=>{
    return e!==todos1;}))

    localStorage.setItem("todos",JSON.stringify(todos));//converting object to string
    }
   
//use of useEffect hook
  useEffect(()=>{ 
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
   <>   
    <Add addthis={addthis}/>
  <Todolist todos1={todos} onRemove={onRemove}/>
   </>
  );
}

export default App;
