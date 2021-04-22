import React from 'react'
import { useState } from 'react'
import './Css/Todo.css';

const Todo = () => {
    const [task, setTaks] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-2">
                            <h5 className="text-center text-primary">Todo List</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <input type="text"
                                        className="form-control"
                                        onChange={e => setTaks(e.target.value)}
                                        placeholder='Add your task'
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input type="submit"
                                        className='btn btn-md btn-success'
                                        value='Add'
                                    />
                                </div>


                            </div>

                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}
export default Todo;