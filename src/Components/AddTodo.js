import React, { useState } from 'react';


function AddTodo(props)
{

    const [descText, setDescText] = useState('');
    const [appxTime, setAppxTime] = useState('');
   
    function onAddTodoClick() 
    {
      console.log(descText,appxTime);
      if(!(descText.length === 0 || appxTime.length === 0) && appxTime.match("^[0-9]+$") && !appxTime.match("\\."))
        props.setTodos(todos => [...todos,{id : todos.length + 1,desc : descText,duration : appxTime}]);
      else
        alert("invalid Todo");
  
    };
    

    return(
        <form>
          <div>
            <label className='mt-5 form-label'>Description</label>
            <input type = 'text' className='form-control' required onChange={(e)=>{setDescText(e.target.value)}}></input>
          </div>
          <div>
            <label className='mt-5 form-label'>Appx Time</label>
            <input type = 'text' className='form-control' required onChange={(e)=>{setAppxTime(e.target.value)}}></input>
          </div>
          <div className = 'text-center'>
            <button type = 'button' className='mt-5 btn btn-primary' onClick={onAddTodoClick}>Add Task</button>
          </div>
          
        </form>
    );
}

export default AddTodo;