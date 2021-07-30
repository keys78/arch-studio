import { useState } from "react";
import Button from "./components/Button";
import Data from "./components/data";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = ({ }) => {
    const [portfolios, setportfolios] = useState([
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
            mumb:2,
            no_date:true,
            date:"September 2019"
        },
        {
            id: 4,
            category: 'featured', 
            name: 'Le Prototype', 
            img:'assets/portfolio/desktop/image-prototype.jpg',
            img:'assets/portfolio/desktop/image-prototype.jpg',
            img:'assets/portfolio/desktop/image-prototype.jpg',
            numb:3,
            no_date:true,
            date:"October 2015"
        },
    ]);




    return ( 
        <div>
            <Header title="HOME"/>
            <div className="w-9/12 mx-auto h-screen bg-black"></div>

            <section className="w-9/12 mx-auto mt-44 ">
                <div className="flex items-end relative pt-24">
                    <div className="absolute text-9xl left-0 top-0 ">
                        <div className="w-full mx-auto">
                            <h1 className="big-text">Welcome</h1>
                        </div>
                    </div>
                    <div className="w-5/12 ml-60 welcome-area">
                        <h1 className="sub-header mb-16">Welcome to Arch Studio</h1>

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

                    <div className="w-6/12">
                        <img className="float-right" src={process.env.PUBLIC_URL + 'assets/home/desktop/image-welcome.jpg'} alt="photos"/>
                    </div>
                </div>
            </section>

            <section className="my-60">
                <div className="w-9/12 mx-auto relative">
                    <img className="w-full" src={process.env.PUBLIC_URL + 'assets/home/desktop/image-small-team.jpg'} alt="photos"/>
                    <div className="bg-black w-full h-full opacity-50 absolute top-0"></div>
                    <div className="absolute top-0 left-0 w-full ">
                        <div className="w-8/12 mx-auto pt-44">
                            <h1 className="big-team mb-10">Small team, <br></br> big ideas</h1>
                            <Button text="About Us" className="w-6/12"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-9/12 mx-auto mb-40">
                <div className="flex-between">
                    <h1 className="featured">Featured</h1>
                    <Button text="See All"/>
                </div>

                <div>
                    <Data portfolios={portfolios.filter((portfolio) => portfolio.category === "featured")} view="View All Projects"/>
                </div>
            </section>
            
            <Footer />
        </div>
     );
}
 
export default Home;