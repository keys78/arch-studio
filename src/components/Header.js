import { Link } from "react-router-dom";

const Header = ({ title }) => {
    return (
        <header className="relative"> 
        <div className="w-9/12 mx-auto py-16">
            <div className="flex items-center justify-between w-6/12">
                <Link to="/" className="w-4/12">
                    <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="arch-studio logo"/>
                </Link>
                <div className="links flex-between w-8/12">
                    <Link to="/portfolio"><h1>Portfolio</h1></Link>
                    <Link to="/about"><h1>About Us</h1></Link>
                    <Link to="/contact"><h1>Contact</h1></Link>
                </div>
            </div>
        </div>
        <div className="absolute top-0 left-0">
            <div className="pl-20">
                <div className="hang-down"></div>
                <h1 className="vertical-group">{ title}</h1>
            </div>
        </div>
        </header>
     );
}
 
export default Header;