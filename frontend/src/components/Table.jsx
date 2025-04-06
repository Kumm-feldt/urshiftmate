import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import './Table.css';

const Table = ({columns, data, renderType}) =>{
return(
    <div className="py-4">
    <div className="table-div relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader columns={ columns}></TableHeader>
            <TableBody data = {data} renderType={renderType}>
                
            </TableBody>
        </table>
    </div>
</div>

)
}

export default Table;