import React from 'react';
import { Container } from 'react-bootstrap'
import Todo from './todoPage/todo';
import TodoTask from './todoPage/todoTask';


function ToDo(props) {



    return (
        <Container >
            <Todo />
            {/* <TodoTask /> */}
        </Container>
    );
}

export default ToDo;