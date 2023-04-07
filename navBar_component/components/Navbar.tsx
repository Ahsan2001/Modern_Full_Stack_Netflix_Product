const Navbar =()=>{
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
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;