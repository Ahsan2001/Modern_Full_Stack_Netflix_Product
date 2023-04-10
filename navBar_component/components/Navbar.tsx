import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbaritem from "./NavbarItems";
import {BsChevronDown} from 'react-icons/bs'

const Navbar =()=>{
    const [showMobileMenu,setShowMobileMenu]=useState(false)

    const toggleMobileMenu =useCallback(()=>{
        setShowMobileMenu(current=>!current)
    },[])

    return (
        <nav>
            <div 
            className="
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                bg-zinc-900
                bg-opacity-90
            ">
                
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
                <div
                className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                "
                >
                    <Navbaritem label={'Home'}/>
                    <Navbaritem label={'Series'}/>
                    <Navbaritem label={'Films'}/>
                    <Navbaritem label={'New & Popular'}/>
                    <Navbaritem label={'My List'}/>
                    <Navbaritem label={'Browse by languages'}/>
                </div>
                <div 
                onClick={toggleMobileMenu}
                className="
                lg:hidden 
                flex flex-row 
                items-center
                gap-2
                ml-8
                cursor-pointer
                relative
                ">
                    <p className="text-white text-sm ">Browse</p>
                    <BsChevronDown className="text-white transition" />
                    <MobileMenu visible={showMobileMenu} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;