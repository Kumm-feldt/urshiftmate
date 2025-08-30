
const TableHeader = ({columns})=>{
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
        {columns.map((column, index) => (
                    <th key={index} scope="col" className="px-6 py-3">
                        {column}
                    </th>
                ))}
         
        </tr>
    </thead>
    )
}

export default TableHeader;