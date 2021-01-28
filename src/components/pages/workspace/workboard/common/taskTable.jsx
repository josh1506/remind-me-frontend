import React from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';

function TaskTable(props) {
    return (
        <table>
            <TableHead />
            <TableBody />
        </table>
    );
}

export default TaskTable;