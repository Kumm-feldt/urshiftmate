import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import './Table.css';

const Table = ({columns, data, renderType}) =>{
    let classN = "py-4 table-container ";
if(!data || data.length == 0){
    return(<p className='no-data-p'>No available data</p>)
}
if(renderType == 'Jobs'){
    classN = classN + " jobs-table-container"
}

return(

    <div className={classN}>
    <div className="table-div relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <TableHeader columns={ columns}></TableHeader>
            <TableBody data = {data} renderType={renderType}>
                
            </TableBody>
        </table>
    </div>
</div>

)
}

export default Table;