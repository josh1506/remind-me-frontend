import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap'

function TodoTask(props) {
    const [todo, setTodo] = useState({
        id: 6,
        title: "New task created in frontend",
        date_created: "2020-12-22T08:06:11.444620Z",
        complete: false,
        tasks: []
    })

    return (
        <Jumbotron>

        </Jumbotron>
    );
}

export default TodoTask;