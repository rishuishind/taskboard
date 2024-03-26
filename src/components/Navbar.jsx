import MobileFilterList from "./MobileFilterList";

const Navbar = () => {
    return (
        <div className="flex justify-between p-8 border-b shadow-md">
            <h1 className="font-bold text-4xl">Task Board</h1>
            <div className="md:hidden">
                <MobileFilterList />
            </div>
        </div>
    )
}

export default Navbar