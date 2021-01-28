import React from 'react';
import Status from './common/status';
import TaskTable from './common/taskTable';

function Workboard(props) {
    return (
        <div>
            <Status />
            <TaskTable />
        </div>
    );
}

export default Workboard;