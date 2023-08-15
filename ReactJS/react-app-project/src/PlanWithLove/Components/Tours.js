import Card from "./Card"

export default function Tours({tours, removeTour}){
   return (
    <div className="w-[100%] flex items-center flex-col">
        <h2 className="text-[40px] border-4 border-teal-700 p-2 px-4 m-2 mb-5">Plan with love</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12 ">
        {
            tours.map((tour)=>{
                return <Card {...tour} removeTour={removeTour}></Card>
            })
        }
        </div>
    </div>
   ); 
}