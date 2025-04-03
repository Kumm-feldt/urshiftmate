const TableBody = ({data}) =>{
    return(
        <tbody>
           
           {data.map((eventData, index) =>{
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            
                <td key ={index} className="px-6 py-4">
                {eventData.summary}
                </td> 
                <td key ={index} className="px-6 py-4">
                {eventData.wage}
                </td> 
                <td key ={index} className="px-6 py-4">
                {eventData.hoursWorked}
                </td> 
                <td key ={index} className="px-6 py-4">
                {eventData.total}
                </td> 
                
                </tr>

           })}
               
            
           
        </tbody>

    )
}

export default TableBody;