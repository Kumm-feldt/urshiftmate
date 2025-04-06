const summaryRender = (data)=>(
    
        data.map((eventData, index) =>(
         
         <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
         
             <td className="px-6 py-4">
             {eventData.workplace}
             </td> 
             <td className="px-6 py-4">
             {eventData.wage}
             </td> 
             <td className="px-6 py-4">
             {eventData.totalHours}
             </td> 
             <td className="px-6 py-4">
             {eventData.totalWage}
             </td> 
             
             </tr>

        ))
    )

const detailedRender = (data) =>(
    
        data.map((eventData, index) =>(
         
         <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
         
             <td className="px-6 py-4">
             {eventData.workplace}
             </td> 
             <td className="px-6 py-4">
             {eventData.wage}
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
             
             </tr>

        ))
    )


const TableBody = ({data, renderType}) =>{
    let rows;
    if( renderType === "Detailed"){
        rows = detailedRender(data);
    }else if(renderType === "Summary"){
        rows = summaryRender(data);

    }


    return(
        <tbody>
           
         {
         rows
         }
               
            
           
        </tbody>

    )
}

export default TableBody;