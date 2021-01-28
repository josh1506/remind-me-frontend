import React, { useState } from 'react';

function TableHead(props) {
    const [data] = useState(["Task", "Status", "Comment", "People", "Due Date"])

    return (
        <thead>
            <tr>
                {data.map(head => <th>{head}</th>)}

            </tr>
        </thead>
    );
}

export default TableHead;