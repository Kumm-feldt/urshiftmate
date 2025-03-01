import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
const Table = () =>{
return(
    <div className="py-4">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader>

        </TableHeader>
            <TableBody>
                
            </TableBody>
        </table>
    </div>
</div>

)
}

export default Table;