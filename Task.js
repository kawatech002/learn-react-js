import React,{useState} from "react"; // import react library and the usestate from react package
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import {  faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Task(){
   
  //initialize the state
  const [toDo , setToDo] =useState([
    {"id":1 , "title": "Task 1"},
    {"id":2 , "title": "Task 2"}
  ]);

   //temp state
   const[newTask, setNewTask] = useState('');

   const[updateData, setUpdate] = useState('');

   // add task
   const addTask =()=> {
    if(newTask){
      let num = toDo.length +1;//calculates the new id for the task to be added
      let newEntry = { id:num, title: newTask}// new task entered is created as an object
      setToDo([...toDo, newEntry])//create a new array by copying the toDo and appending newEntry at the end
      setNewTask('')//clear input field
    }
  }

  // delete task
  const deleteTask =(id)=> {//use filter method to exclude method with that id
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);
    
   }

  

   // get value in the update inputtext area
   // get value from event
   const changetask =(e)=> {
    
    //new object is created
    let newEntry = {
      id: updateData.id,
      title: e.target.value,//captures the new value of the field which the updated task
      
    }
    setUpdate(newEntry);//setupdate fuction is updated with the new object
    
   }

   //update values
   const update =() =>{
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)// new array copying the existing to-do list and filters out the task
    let updatedObject = [...filterRecords, updateData] //copying all and appends the updated data
    setToDo(updatedObject);
    setUpdate('');
   }

   return (
    <div className="container App">
      <h1>Lists</h1>
      
     <br></br>
     
     {/* add task */}
     <div className='row'> 
      <div className='col'>
        <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
          className='form-add'/>
      </div>
      <div className='col-auto'> 
        <button onClick={addTask} className='buttons'> 
          Add Task
        </button>
      </div>
     </div>

     <br></br>

     {/* update task */}

     <div className='row'> 
      <div className='col'>
        <input
          value={ updateData && updateData.title}
          onChange={(e) => changetask(e)}//function called when the input field changes
          className='form-add'/>
      </div>
      <div className='col-auto'> 
        <button onClick={update} className='buttons'> 
          Update
        </button>
      </div>
     </div>
 
     <br></br>

      {/* display ToDo*/}
      {toDo.length? '':'No Tasks...'}
       {toDo
       .map((task,index) =>{
        return(
          <React.Fragment key={task.id}>

            <div className='col taskBg'> 
            <span className ="taskNumber">{index + 1}</span>
            <span className ="taskTest">{task.title}</span>  
            <div className='iconsWrap'>
               {/* span for edit task */}
              
              <span title='edit' onClick={() => setUpdate({
                id: task.id,
                title: task.title,
                
              })}>
                <FontAwesomeIcon icon={faPen}/>
              </span>

              {/* span for delete task */}
              <span title='delete' onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon icon={faTrashCan}/>
              </span>
            </div>
            
            

            </div>
            
          </React.Fragment>
        )
       })
       }
    </div>
  );
    

   
}

export default Task;