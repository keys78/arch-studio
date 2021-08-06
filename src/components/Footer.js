import Button from "./Button"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="xl:w-9/12 md:w-11/12 w-full xl:mx-auto mx-0 relative mt-20">
            <div className="flex md:flex-row flex-col items-center justify-between lg:w-7/12 md:w-8/12 w-full">
                <Link to="/" className="lg:w-6/12 w-8/12 foot-logo md:pl-20 pl-9 md:pt-20 pt-12">
                    <img src={process.env.PUBLIC_URL + '/assets/logo - white.svg'} alt="arch-studio logo" />
                </Link>
                <div className="links flex md:flex-row flex-col justify-between items-center lg:w-8/12 w-10/12 lg:ml-12 md:ml-8 ml-0 md:py-0 py-10">
                    <Link to="/portfolio"><h1>Portfolio</h1></Link>
                    <Link className="md:py-0 py-4" to="/about"><h1>About Us</h1></Link>
                    <Link to="/contact"><h1>Contact</h1></Link>
                </div>
                <div className="md:absolute top-16 -right-10">
                    <div className="w-full">
                        <Link to="/portfolio"><Button text={"See Our Portfolio"} /></Link>
                    </div>
                </div>
            </div>
            <h6 class="absolute bottom-0 right-4 signature text-grey-400 text-lg font-medium text-right">| Coded by <a class="text-green-600" href="https://github.com/Em-codes/arch-studio">Em_codes</a></h6>
        </footer>
    );
}

export default Footer;