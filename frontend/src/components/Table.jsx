import React, { useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { useState } from "react";
import * as api from "../api.js"

const Table = ({ columns, data, renderType, onSubmitHandler }) => {

    const [jobs, setJobs] = useState(data);
    // Update jobs whenever data changes
    useEffect(() => {
        setJobs(data || [


        ]);
    }, [data]);

    const handleDelete = async (workplaceId) => {
        if (onSubmitHandler) {
            try {
                await onSubmitHandler(workplaceId); // Pass workplaceId to parent

            } catch (err) {
                console.log("ERROR", err)
            }
        }
    }



    let classN = "py-4 table-container ";
    if (!data || data.length == 0) {
        return (<p className='no-data-p'>No available data</p>)
    }
    if (renderType == 'Jobs') {
        classN = classN + " jobs-table-container"
    }

    return (

        <div className={classN}>
            <div className="table-div relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <TableHeader columns={columns}></TableHeader>
                    <TableBody
                        data={jobs} renderType={renderType} deleteJob={handleDelete}>
                    </TableBody>
                </table>
            </div>
        </div>

    )
}

export default Table;