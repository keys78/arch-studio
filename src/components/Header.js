import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    const [showBar, setShowBar] = useState(null)

const openNav = () => {
    !showBar ? setShowBar(true) : setShowBar(false)
}



    return (
        <header className="relative">
            <div className="md:w-9/12 w-11/12 mx-auto md:py-16 py-8">
                <div className="flex items-center justify-between xl:w-6/12 lg:w-8/12 md:w-11/12 w-full">
                    <Link to="/" className="w-4/12">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="arch-studio logo" />
                    </Link>
                    <div className="md:flex hidden links flex justify-between items-center w-8/12">
                        <Link to="/portfolio"><h1>Portfolio</h1></Link>
                        <Link to="/about"><h1>About Us</h1></Link>
                        <Link to="/contact"><h1>Contact</h1></Link>
                    </div>
                    <div onClick={openNav} className="md:hidden block open-control">
                        {!showBar && <img src='/assets/icons/icon-hamburger.svg' alt="hamburger"/> }
                        {showBar && <img src='/assets/icons/icon-close.svg' alt="hamburger"/> }
                    </div>
                </div>
            </div>

            {showBar && <div className='sidebar links h-72 w-full md:hidden block animate__animated animate__bounceInLeft'>
                <Link to="/portfolio"><h1>Portfolio</h1></Link>
                <Link to="/about"><h1 className="py-5" >About Us</h1></Link>
                <Link to="/contact"><h1>Contact</h1></Link>
            </div>
            }

            <div className="absolute top-0 left-0 md:flex hidden">
                <div className="pl-20">
                    <div className="hang-down"></div>
                    <h1 className="vertical-group">{title}</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;