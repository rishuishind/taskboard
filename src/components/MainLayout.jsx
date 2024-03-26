import { useState } from "react"
import InputModal from "./InputModal";
import CaraouselCard from "./CaraouselCard";

const MainLayout = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [tasks, setTasks] = useState([]);
    const handleSetIsAdding = () => {
        setIsAdding(false);
    }
    const handleAllTasks = ({ title, description, assignee, priority }) => {
        setTasks(prev => [...prev, { title, description, assignee, priority }]);
    }
    return (
        <div className="h-[100vh] flex overflow-hidden">
            <div className="hidden md:flex bg-slate-300 w-[400px] h-full">Filters</div>
            <div className="flex flex-col flex-1">
                <div className="p-10 ">
                    <button onClick={() => setIsAdding(true)} className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-lg active:scale-105">Add Task</button>
                </div>
                {isAdding && <InputModal setTasks={handleAllTasks} setIsAdding={handleSetIsAdding} />}
                <div className="h-full flex flex-wrap gap-y-2 border border-red-500  overflow-y-auto">
                    {tasks.map(task => <CaraouselCard key={task} tasks={task} />)}
                </div>
            </div>
        </div>
    )
}

export default MainLayout