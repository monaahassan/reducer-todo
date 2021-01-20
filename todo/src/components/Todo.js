import React from 'react';

const Todo = (props) => {
    const {todo, handledToggleCompleted} = props;
    const handleClick = ()=>{
        handledToggleCompleted(todo.id);
    }
    return(<li onClick={handleClick} className={todo.completed ? "completed":""}>{todo.title}</li>)

}

export default Todo;