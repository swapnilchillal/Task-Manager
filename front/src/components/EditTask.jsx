import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


const EditTask = ({allTask, taskData,  setEdit}) => {
    

    const [data , setData] = useState("")

    const handleEdit = async (data) => {
            try {
                await axios.patch(`http://localhost:5000/${taskData._id}`,{name:data})
                allTask();
                toast("Edit successful")
            } catch (error) {
                alert("Error in edit")
            }
        
        setEdit(false);
    }
        return <div>

            <p>Current Task : {`${taskData.name}`}</p>
        <form onSubmit={(ev) => {ev.preventDefault()}} >
            <input id="subText" style={{color:'grey'}} type="text" name="tasktask" placeholder="Enter New task" value={data} onChange={(ev) => {setData(ev.target.value)}}/>
            &nbsp;&nbsp;<button id="subText" onClick={() => handleEdit(data)} >Save</button>
        </form>
        </div>
}

export default EditTask;