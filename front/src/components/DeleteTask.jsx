const DeleteTask = (taskData, setTask,day) => {
    setTask(curr => {
        const taskInfo = curr[day].map(val => val.id !== taskData.id);
        curr[day] = [...taskInfo]
        return {...curr};
        })
    
}

export default DeleteTask;