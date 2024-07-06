import axios from 'axios'
import { toast } from "react-toastify";
 

const AddTask = ({day, addData, setAddData, allTask}) => {
  
  
    const submit = async (ev) => {
      
      ev.preventDefault(); 
      if(addData.length > 20 || addData.length === 0)
          return alert("Invalid Entry! Try again")
      try{
       await axios.post('http://localhost:5000/', {name:addData, day:day});
       allTask();
        toast("Task Addedd Successfully!");
        
    }catch(err)
    {
      alert(err.message)
    }
    setAddData('');
    }

  return (

    <div>
      <form onSubmit={submit}>
        <input id="subText" style={{color:'grey'}} type="text" name="name" value={addData}  placeholder={`Enter ${day} Task`} onChange={(ev) => {setAddData(ev.target.value)}} />
        &nbsp;&nbsp;
        <button id="subText" type="submit">add</button> &nbsp;&nbsp;
      </form>
      {/* <div>{renderTask()}</div> */}
    </div>
  );
};

export default AddTask;
