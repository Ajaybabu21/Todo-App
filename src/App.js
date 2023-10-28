import { useState } from "react";
function App() {
  const[tasks,setTasks] = useState([]);
  const [task,setTask] = useState(" ");
  const addTasks = () => {
    if(task!==""){
    setTasks([...tasks,task])
    setTask("");
  }
 }
 const deleteTasks = (index) => {
  const updatedList = [...tasks];
  updatedList.splice(index,1)
  setTasks(updatedList)
 }
 
  return (
    <div className="h-screen bg-green-300">
      <div className="flex flex-col items-center">
        <h1 className="text-lg m-16 font-bold fs-60">TODO APP LIST</h1>
        <div className="p-6">
          <input className="bg-slate-100 rounded-md p-4 m-4" type="text" 
          value={task}
          onChange={(e)=>{
            setTask(e.target.value);
          }}
          placeholder="Create a New Todo"/>
          <button onClick={addTasks}
          className="bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600"><i class="fa-solid fa-circle-plus"></i></button>
        
  </div>
  
  <div>
  {tasks?.length > 0? (
  <ul>
    {
      tasks.map((task,index) => (
        <div className="flex  bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
          <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
          <button onClick={()=>{deleteTasks(index)}} className="bg-red-500 text-white p-2 mx-1 rounded-md fovt-bold hover:bg-red-800"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      ))
    }
  </ul>
  ):(
    <div>
      <p>No Task Found</p>
    </div>
  )}
  </div>
      </div>
    </div>
  );
}

export default App;