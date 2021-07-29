import Button from "./Button"

const Footer = () => {
    return ( 
        <footer className="w-9/12 mx-auto relative mt-20">
            <div className="flex items-center justify-between w-7/12">
                <div className="w-6/12 foot-logo pl-20 pt-20">
                    <img src={process.env.PUBLIC_URL + '/assets/logo - white.svg'} alt="arch-studio logo"/>
                </div>
                <div className="links flex-between w-8/12 ml-12">
                    <h1>Portfolio</h1>
                    <h1>About Us</h1>
                    <h1>Contact</h1>
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