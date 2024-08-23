import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)

  const link = ["Home", "What is GPT?","Case Studies", "Blog"]
  return (
    <div className="h-14 w-full flex item-center justify-between ">
      <div className="flex items-center gap-9">
        <div className="flex items-center">
         <h1 className="logo text-3xl sm:text-xl md:text-3xl  font-bold">GPT-3</h1>
        </div>
        <div className="sm:flex items-center gap-4 text-xl sm:text-xs md:text-xl  hidden">
          {link.map((l, index) => (
            <a key={index} href="#" className="hover:text-orange-400">{l}</a> 
          ))}
        </div>
      </div>
      <div className="sm:flex items-center gap-3 hidden">
        <button>Sign In</button>
        <button className="py-2 px-4 bg-orange-400 text-white rounded">Sign Up</button>
      </div>
      <div className="flex items-center sm:hidden">
        { ToggleMenu 
        ? <RiCloseLine className="text-4xl cursor-pointer text-white" onClick={() => setToggleMenu(!ToggleMenu)}/>
       : <RiMenu3Line className="text-4xl cursor-pointer text-white" onClick={() => setToggleMenu(!ToggleMenu)}/>
       }
      </div>
      {ToggleMenu && (
        <div className="absolute top-20 right-0 h-full w-[45vw] flex flex-col gap-8  sm:hidden z-50 bg-black  py-6 px-6 shadow-md">
          {link.map((l, index) => (
            <a key={index} href="#" className="block text-3xl hover:text-orange-400">{l}</a> 
          ))}
        </div>  // Menu items will appear here when the menu is toggled on
      )}
    </div>
  )
}

export default Navbar