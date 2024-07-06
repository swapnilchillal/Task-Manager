import { useParams } from "react-router-dom";
import AddTask from "./AddTask";
import { useEffect, useState } from "react";
import EditTask from "./EditTask";
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

 //Global
 
var allTask;
const EachDayTask = () => {
  const { day } = useParams();

  var [task, setTask] = useState(null);
  var [edit, setEdit] = useState(false);
  var [currTask, setCurrTask] = useState({});
  const [addData, setAddData] = useState("");

 

  useEffect(
    function () {
      allTask = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/day/${day.toLowerCase()}`
          );
          const result = await response.data;
          setTask(result);
        } catch (err) {
          alert(err.response);
        }
      };

      allTask();
    },
    [day]
  );

  const deleteTask = async (taskData) => {

    try {
      await axios.delete(`http://localhost:5000/${taskData._id}`);
      allTask();
      toast("Delete successful")
    } catch (err) {
      alert("Error Deleting");
    }
  };

  const handleEdit = (taskData) => {
    setCurrTask(taskData);
    setEdit(true);
  };

  const TaskCard = ({ taskData }) => {
    return (
      <>
        <td style={{ display: "flex", justifyContent: "left", width: "250px" }}>
          {taskData.name}
        </td>
        <td>
          &nbsp;&nbsp;
          <button
            style={{ float: "right", fontSize: "20px" }}
            onClick={() => handleEdit(taskData)}
          >
            Edit
          </button>
        </td>
        &nbsp;&nbsp;
        <td>
          <button
            style={{ float: "right", fontSize: "20px" }}
            onClick={() => deleteTask(taskData)}
          >
            Delete
          </button>
        </td>
      </>
    );
  };

  //   console.log(task["monday"][2]="ek do teen")

  const renderTask = () => {
    return (
      <table>
        {task !== null
          ? task.map((val, idx) => (
              <tr key={idx}>
                <TaskCard taskData={val} />
              </tr>
            ))
          : null}
      </table>
    );
  };

  if (!edit)
    return (
      <div>
        <AddTask
          day={day.toLowerCase()}
          addData={addData}
          setAddData={setAddData}
          allTask={allTask}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {renderTask()}
        </div>{" "}
        <ToastContainer autoClose={2000} style={{fontSize:"15px"}} />

      </div>
    );
  else
    return (
      <EditTask
        allTask={allTask}
        taskData={currTask}
        setEdit={setEdit}
        />
       
    );
};
export default EachDayTask;
