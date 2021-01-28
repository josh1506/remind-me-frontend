import React from 'react';
import TodoData from './todoData';

function Todo(props) {
    return (
        <div>
            <div>
                <img src="" alt="add" />
                <img src="" alt="edit" />
            </div>
            <div>
                <p>Task</p>
                <input type="checkbox" name="" id="" />
                <img src="" alt="edit" />
                <img src="" alt="delete" />
                <TodoData />
            </div>
        </div>
    );
}

export default Todo;