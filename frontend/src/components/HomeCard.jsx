import Card from './Card'
import Table from './Table'
const HomeCards = () =>{
    return (
        <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    
                    <Card>
                        <h2 className='text-2xl font-bold'>Hours from Date to Date</h2>
                        <Table></Table>
                    </Card>
                      
                    <Card>
                        <h2 className='text-2xl font-bold'>Hours from Date to Date</h2>
                        <Table></Table>
                    </Card>
                </div>
            </div>

        </section>
    )
}

export default HomeCards;