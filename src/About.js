import Footer from "./components/Footer"
import Header from "./components/Header"

const About = () => {
    return ( 
        <div>
            <Header title="ABOUT US"/>
            <section className="md:w-9/12 w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col">
                    <div className="xl:w-6/12 lg:w-5/12 w-3/12">
                        <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/about/desktop/image-hero.jpg'} alt="photos"/>
                    </div>
                    <div className="relative flex flex-col flex-end">
                        <h1 className="-ml-12 big-text">About</h1>
                        <div className="bg-white -ml-40">
                            <div className="w-7/12 py-36 mx-auto">
                                <h1 className="sub-header mb-16 text-black">Your team of professionals</h1>
                                <p> Our small team of world-class professionals will work
                                    with you every step of the way. Strong relationships are
                                    at the core of everything we do. This extends to the
                                    relationship our projects have with their surroundings.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="md:w-9/12 w-11/12 mx-auto">
                <div><p class="border-gray-600 border-b w-28"></p></div>
                <div className="flex items-center relative md:flex-row flex-col">
                    <div className="">
                        <h1 className="sub-header mb-16 text-black">Our Heritage</h1>
                            <p>Founded in 2007, we started as a trio of architects. Our complimentary 
                            skills and relentless attention to detail turned Arch into one of the most sought
                            after boutique firms in the country.
                        </p>
                        <p className="py-5">Speciliazing in Urban Design allowed us to focus on creating 
                            exceptional structures that live in harmony with their surroundings. We consider every 
                            detail from every surrounding element to inform our designs.
                        </p>
                        <p>Our small team of world-class professionals provides input on every project.</p>
                    </div>

                    <div className="xl:w-6/12 lg:w-5/12 w-3/12">
                        <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/about/desktop/image-heritage.jpg'} alt="photos"/>
                    </div>
                </div>
            </section>

            <section className="w-9/12 mx-auto my-60">
                <div className="flex justify-between">
                    <div className="w-4/12">
                        <h1 className="sub-header">The <br></br> Leaders</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-8 w-7/12">
                        <div className="person-hover relative">
                            <img src={process.env.PUBLIC_URL + 'assets/about/desktop/avatar-jake.jpg'} alt="photos"/>
                            <h1 className="text-xl pt-5 font-bold">Jake Richards</h1>
                            <h3 className="text-base font-medium opacity-70">Chief Architect</h3>
                            <div className="blind absolute top-0 left-0 w-full h-full bg-white opacity-60 pt-28 pl-40">
                                <div className="flex gap-4">
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-twitter.svg'} alt="twitter-icons"/>
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-linkedin.svg'} alt="twitter-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="person-hover relative">
                            <img src={process.env.PUBLIC_URL + 'assets/about/desktop/avatar-thompson.jpg'} alt="photos"/>
                            <h1 className="text-xl pt-5 font-bold">Jake Richards</h1>
                            <h3 className="text-base font-medium opacity-70">Head Of Finance</h3>
                            <div className="blind absolute top-0 left-0 w-full h-full bg-white opacity-60 pt-28 pl-40">
                                <div className="flex gap-4">
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-twitter.svg'} alt="twitter-icons"/>
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-linkedin.svg'} alt="twitter-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="person-hover relative">
                            <img src={process.env.PUBLIC_URL + 'assets/about/desktop/avatar-jackson.jpg'} alt="photos"/>
                            <h1 className="text-xl pt-5 font-bold">Jake Richards</h1>
                            <h3 className="text-base font-medium opacity-70">Lead Designer</h3>
                            <div className="blind absolute top-0 left-0 w-full h-full bg-white opacity-60 pt-28 pl-40">
                                <div className="flex gap-4">
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-twitter.svg'} alt="twitter-icons"/>
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-linkedin.svg'} alt="twitter-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="person-hover relative">
                            <img src={process.env.PUBLIC_URL + 'assets/about/desktop/avatar-maria.jpg'} alt="photos"/>
                            <h1 className="text-xl pt-5 font-bold">Jake Richards</h1>
                            <h3 className="text-base font-medium opacity-70">Senior Architect</h3>
                            <div className="blind absolute top-0 left-0 w-full h-full bg-white opacity-60 pt-28 pl-40">
                                <div className="flex gap-4">
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-twitter.svg'} alt="twitter-icons"/>
                                    <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/icons/icon-linkedin.svg'} alt="twitter-icons"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Footer />
            </div>
        </div>
     );
}
 
export default About;