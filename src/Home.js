import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import Data from "./components/data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Swipe from "./components/Swipe";

const Home = ({ }) => {
    const [portfolios] = useState([
        {
            id: 5,
            category: 'featured', 
            name: 'Project Del Sol', 
            img:'assets/portfolio/desktop/image-del-sol.jpg',
            imgT:'assets/portfolio/tablet/image-del-sol.jpg',
            imgM:'assets/portfolio/mobile/image-del-sol.jpg',
            numb:1,
            no_date:true,
            date:"January 2016"
        },
        {
            id: 6,
            category: 'featured',
            name: '228B Tower',
            img:'assets/portfolio/desktop/image-228b.jpg',
            imgT:'assets/portfolio/tablet/image-228b.jpg',
            imgM:'assets/portfolio/mobile/image-228b.jpg',
            numb:2,
            no_date:true,
            date:"September 2019"
        },
        {
            id: 4,
            category: 'featured', 
            name: 'Le Prototype', 
            img:'assets/portfolio/desktop/image-prototype.jpg',
            imgT:'assets/portfolio/tablet/image-prototype.jpg',
            imgM:'assets/portfolio/mobile/image-prototype.jpg',
            numb:3,
            no_date:true,
            date:"October 2015"
        },
    ]);




    return ( 
        <div>
            <Header title="HOME"/>
            <div className="swipe-div md:w-9/12 sm:w-11/12 w-full mx-auto z-auto"><Swipe /></div>
            

            <section className="md:w-9/12 w-11/12 mx-auto md:mt-44 sm:mt-16 mt-4">
                <div className="flex items-end relative md:pt-24 pt-0">
                    <div className="md:block hidden absolute text-9xl left-0 top-0 ">
                        <div className="w-9/12">
                            <h1 className="big-text">Welcome</h1>
                        </div>
                    </div>
                    <div className="lg:w-5/12 w-11/12 xl:ml-60 ml-0 welcome-area">
                        <h1 className="sub-header md:mb-8 mb-5 mt-20">Welcome to Arch Studio</h1>

                        <p> We have a unique network and skillset to help bring your projects to life.
                            Our small team of highly skilled individuals combined with our large network put us in a strong position
                            to deliver exceptional results.
                        </p>
                        <p className="py-5">Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, 
                            we create spaces that inspire and delight.
                        </p>
                        <p>We work closely with our clients so that we understand the intricacies of each project. 
                            This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                        </p>
                    </div>

                    <div className="w-6/12 lg:block hidden">
                        <img className="float-right" src={process.env.PUBLIC_URL + 'assets/home/desktop/image-welcome.jpg'} alt="photos"/>
                    </div>
                </div>
            </section>

            <section className="lg:my-60 my-28">
                <div className="md:w-9/12 sm:w-11/12 w-full  mx-auto relative">
                    <img className="w-full big-team-box" src={process.env.PUBLIC_URL + 'assets/home/desktop/image-small-team.jpg'} alt="photos"/>
                    <div className="bg-black w-full h-full opacity-50 absolute top-0"></div>
                    <div className="absolute top-0 left-0 w-full ">
                        <div className="sm:w-8/12 w-9/12 mx-auto pt-44">
                            <h1 className="big-team mb-10">Small team, <br></br> big ideas</h1>
                            <Link to="/about"><Button text="About Us" className="w-6/12"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:w-9/12 w-11/12 mx-auto mb-40">
                <div className="flex-between mb-3">
                    <h1 className="featured">Featured</h1>
                    <Link className="sm:block hidden" to="/portfolio"><Button text="See All "/></Link>
                </div>

                <div>
                    <Data portfolios={portfolios.filter((portfolio) => portfolio.category === "featured")} view="View All Projects"/>
                </div>
                <div className="flex justify-end mt-5 w-full">
                    <Link className="sm:hidden" to="/portfolio"><Button className="mt-5" text="See All "/></Link>
                </div>
                
            </section>
            
            <Footer />
        </div>
     );
}
 
export default Home;