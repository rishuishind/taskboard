/* eslint-disable react/prop-types */

const CaraouselCard = ({ tasks }) => {
    return (
        <div className="border ml-2 rounded-md mr-2 border-green-500 h-[320px] w-[355px] flex">
            <div className='h-full relative w-full flex flex-col items-center bg-slate-200 border border-black' key={tasks.title}>
                <div className='flex mt-2 gap-3 items-center'>
                    <span className="font-bold">Title:</span>
                    <h3 className=''>{tasks.title}</h3>
                </div>
                <div className="flex flex-col h-full justify-around">
                    <div className="flex gap-3 items-center">
                        <span className="font-bold">Description:</span>
                        <p>{tasks.description}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="font-bold">Assignee:</span>
                        <p>{tasks.assignee}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="font-bold">Priority:</span>
                        <p>{tasks.priority}</p>
                    </div>
                </div>
                <button className=" absolute right-3 bg-slate-600 px-6 py-3 text-white rounded-md bottom-1 hover:bg-slate-500 active:scale-105">Edit</button>
            </div>
        </div>
    )
}

export default CaraouselCard