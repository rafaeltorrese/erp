import React from 'react';
import {Table} from "antd";


const TableComponentActivities = ({columns, data}) => (
    <div>
        <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />,
    </div>  
)


export default TableComponentActivities;

