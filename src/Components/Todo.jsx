import React, { useState } from 'react';
import './Css/Todo.css';
const Todo = () => {
    const [task, setTask] = useState('');
    const [tasklist, setTaskList] = useState([]);
    const [err,setErr]=useState('');
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== "") {
            const data = {
                id: Math.random(),
                tasks: task,
                isCompleted: false,
            }
            setTaskList([...tasklist, data]);
            setErr('');
            setTask('');
        }
        else{
            let ee="Please enter your task !";
            setErr(ee);
        }
    };
    const deleteTask=(i)=>{
        setTaskList(tasklist.filter((t)=>t.id!==i));
    }
    const completeTask=(i)=>{
        const f=tasklist.findIndex((t)=>i===t.id)
        const newTaskList=[...tasklist]
        newTaskList[f]={
            ...newTaskList[f],
            isCompleted:true
        };
        setTaskList(newTaskList);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 mt-3 bg-secondary mb-3">
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-center text-white">Todo List</h4>
                        <div className="form-group mt-2">
                            <div className="row">
                                <div className="col-md-10 pb-3">
                                    <input type="text"
                                        maxLength="50"
                                        className='form-control'
                                        placeholder='Add your task '
                                        onChange={handleChange}
                                        value={task}
                                    />
                                    <small className='form-text text-white'>{err}</small>
                                </div>
                                <div className="col-md-2 text-center">
                                    <input type="submit"
                                        className='btn btn-md btn-primary add'
                                        value='Add'
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    {
                        tasklist.length === 0 ? "" :
                            <ul className='list-group mt-3'>
                                {
                                    tasklist.map((task, index) => (
                                        <li key={index} className={"list-group-item mb-2 " + (task.isCompleted===true ? 'text-success' : 'text-primary')}>{task.tasks}
                                            <div className="buttons">
                                                <button className='btn btn-sm btn-danger'
                                                onClick={()=>deleteTask(task.id)}
                                                >
                                                Delete
                                                </button>
                                                <button className='btn btn-sm btn-success'
                                                onClick={()=>completeTask(task.id)}
                                                >
                                                Completed                                                
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                    }
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}
export default Todo;