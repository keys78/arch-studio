import Button from "./Button"
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="w-9/12 mx-auto relative mt-20">
            <div className="flex items-center justify-between w-7/12">
                <Link to="/"  className="w-6/12 foot-logo pl-20 pt-20">
                    <img src={process.env.PUBLIC_URL + '/assets/logo - white.svg'} alt="arch-studio logo"/>
                </Link>
                <div className="links flex-between w-8/12 ml-12">
                    <Link to="/portfolio"><h1>Portfolio</h1></Link>
                    <Link to="/about"><h1>About Us</h1></Link>
                    <Link to="/contact"><h1>Contact</h1></Link>
                </div>
            </div>
            <div className="absolute top-16 -right-10">
                <div className="w-full">
                <Button text={"See Our Portfolio"}/>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;