import MainLayout from "./components/MainLayout"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col">
        <Navbar />
        <MainLayout />
      </div>
    </>
  )
}

export default App
