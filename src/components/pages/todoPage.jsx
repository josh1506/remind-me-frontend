import React, { useState, useEffect } from 'react';
import { Container, Modal, Button, Form, Table, Row, Col } from 'react-bootstrap'
import axios from 'axios'
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