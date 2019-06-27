import React from 'react';
import {Table} from "antd";


const TableComponent = ({columns, data,header}) => (
    <div>
        <Table
    columns={columns}
    dataSource={data}
    bordered
    title={header}
    
  />,
    </div>  
)


export default TableComponent

