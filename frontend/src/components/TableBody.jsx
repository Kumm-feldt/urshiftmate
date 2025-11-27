import { useState } from "react";



const summaryRender = (data = []) => {
    let totalHours = 0;
    let totalWage = 0;


    let rows = data.map((eventData, index) => {
        const wage = Number(eventData.wage) || 0;           // hourly wage
        const hours = Number(eventData.totalHours) || 0;    // hours worked

        totalHours += hours;
        totalWage += (wage * hours);

        return (
            <tr key={index} className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
                <td className="px-6 py-4">
                    {eventData.workplace}
                </td>
                <td className="px-6 py-4">
                    ${(eventData.wage).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                    {eventData.totalHours}
                </td>
                <td className="px-6 py-4">
                    ${(eventData.totalWage).toFixed(2)}
                </td>
            </tr>
        )

    })
    rows.push(

        <tr key={`total-row`} className="bg-gray-100 border-t border-gray-300">
            <td className="px-6 py-4 font-semibold"><strong>Total:</strong></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 font-semibold"><strong>{totalHours}</strong></td>
            <td className="px-6 py-4 font-semibold"><strong>${totalWage.toFixed(2)}</strong></td>
        </tr>

    )

    return rows
}



const jobsRender = (data, deleteJob) => (
    data.map((jobData, index) => (
        <tr key={index} className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">

            <td className="px-6 py-4">
                {jobData.workplace}
            </td>
            <td className="px-6 py-4">
                ${(jobData.hourlyRate)}
            </td>
            <td className="px-6 py-4">
                <i className="bi bi-trash" onClick={() => deleteJob(jobData.workplaceId)}></i>
            </td>
        </tr>
    ))
)


const detailedRender = (data = []) => {
    let totalHours = 0;

    let rows = data.map((eventData, index) => {
        const hours = eventData.totalHours
        totalHours += hours
        return (<tr key={index} className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">

            <td className="px-6 py-4">
                {eventData.workplace}
            </td>

            <td className="px-6 py-4">
                {eventData.date}
            </td>
            <td className="px-6 py-4">
                {eventData.startTime}
            </td>
            <td className="px-6 py-4">
                {eventData.endTime}
            </td>
            <td className="px-6 py-4">
                {eventData.totalHours}
            </td>

        </tr>)

    })


    rows.push(
        <tr key={'total-detailed'} className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">

            <td className="px-6 py-4">
                <strong>Total:</strong>
            </td>

            <td className="px-6 py-4">
            </td>
            <td className="px-6 py-4">
            </td>
            <td className="px-6 py-4">
            </td>

            <td className="px-6 py-4">
                <strong>{totalHours}</strong>
            </td>

        </tr>
    )

    return rows

}


const TableBody = ({ data, renderType, deleteJob }) => {
    let rows;
    if (renderType === "Detailed") {
        rows = detailedRender(data);
    } else if (renderType === "Summary") {
        rows = summaryRender(data);
    } else if (renderType == "Jobs") {
        rows = jobsRender(data, deleteJob)
    }


    return (
        <tbody>

            {
                rows
            }
        </tbody>

    )
}

export default TableBody;