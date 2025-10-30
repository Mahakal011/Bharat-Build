import { Link } from "react-router-dom";
import { House } from 'lucide-react';
import logo from "../assets/Images/logo/Logo1.png"

const Header = () => {
    return (
        <header className="flex justify-around items-center bg-linear-to-r from-[#1E8449] via-[#F4D03F] to-[#5DADE2] text-[#0b3d91] py-6 shadow-md border-b-4 border-[#0b3d91] ">
            <div className="max-w-7xl px-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm " width="158px" height="48px">
                        <img src={logo} alt="Logo" className='h-14 w-14' />
                    </div>
                    <div>
                        <h1 className="sm:text-3xl md:text-4xl font-extrabold tracking-wide">District Performance Portal</h1>
                        <p className="text-[#333] font-medium text-sm sm:text-base md:text-lg">Government of India</p>
                    </div>
                </div>

            </div>
            <div className="mr-5 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition-all duration-300">
                <Link to="/">
                    <House className="w-6 h-6" />
                </Link>
            </div>
        </header>


    )
}

export default Header