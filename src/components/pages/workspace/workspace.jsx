import React from 'react';
import Sidebar from './sidebar';
import Workboard from './workboard/workboard';

function Workspace(props) {
    return (
        <div>
            <Sidebar />
            <Workboard />
        </div>
    );
}

export default Workspace;