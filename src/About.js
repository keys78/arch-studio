import Footer from "./components/Footer"
import Header from "./components/Header"
import { useState } from "react"

const About = () => {
    const [members] = useState([
        {
            id: 1,
            name: 'Jake Richards',
            position: 'Chief Architect',
            img: 'assets/about/desktop/avatar-jake.jpg',
            twitterIcon: 'assets/icons/icon-twitter.svg',
            linkedinIcon: 'assets/icons/icon-linkedin.svg',
        },
        {
            id: 2,
            name: 'Thompson Smith',
            position: 'Head Of Finance',
            img: 'assets/about/desktop/avatar-thompson.jpg',
            twitterIcon: 'assets/icons/icon-twitter.svg',
            linkedinIcon: 'assets/icons/icon-linkedin.svg',
        },
        {
            id: 3,
            name: 'Jackson Rourke',
            position: 'Lead Designer',
            img: 'assets/about/desktop/avatar-jackson.jpg',
            twitterIcon: 'assets/icons/icon-twitter.svg',
            linkedinIcon: 'assets/icons/icon-linkedin.svg',
        },
        {
            id: 4,
            name: 'Maria Simpson',
            position: 'Senior Architect',
            img: 'assets/about/desktop/avatar-maria.jpg',
            twitterIcon: 'assets/icons/icon-twitter.svg',
            linkedinIcon: 'assets/icons/icon-linkedin.svg',
        },


    ])

    return (
        <div>
            <Header title="ABOUT US" />
            <section className="md:w-9/12 sm:w-11/12 w-full mx-auto">
                <div className="flex md:flex-row flex-col">
                    <div className="xl:w-6/12 lg:w-5/12 w-full">
                        <img className="max-w-7xl md:block hidden" src={process.env.PUBLIC_URL + 'assets/about/desktop/image-hero.jpg'} alt="photos" />
                        <img className="max-w-7xl about-hero md:hidden block" src={process.env.PUBLIC_URL + 'assets/about/tablet/image-hero.jpg'} alt="photos" />
                    </div>
                    <div className="relative flex flex-col flex-end">
                        <h1 className="-ml-12 big-text">About</h1>
                        <div className="bg-white w-11/12 -mt-12 md:-ml-40 ml-0">
                            <div className="md:w-7/12 w-11/12 md:py-36 py-16 mx-auto">
                                <h1 className="sub-header lg:mb-16 mb-6 text-black">Your team of professionals</h1>
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

            <section className="md:w-9/12 w-11/12 mx-auto lg:mt-0 mt-10">
                <div><p class="md:block hidden lg:mb-0 mb-10 border-gray-600 border-b lg:w-28 w-16"></p></div>
                <div className="flex items-center relative md:flex-row flex-col">
                    <div className="">
                        <h1 className="sub-header lg:mb-16 mb-6 text-black">Our <br></br> Heritage</h1>
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

                    <div className="xl:w-6/12 lg:w-5/12 w-3/12 lg:block hidden">
                        <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/about/desktop/image-heritage.jpg'} alt="photos" />
                    </div>
                </div>
            </section>

            <section className="md:w-9/12 w-11/12 mx-auto lg:my-60 my-0 mt-24 mb-44">
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="w-4/12">
                        <h1 className="sub-header lg:pb-0 pb-12">The <br></br> Leaders</h1>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:w-7/12 md:w-11/12 sm:w-9/12 w-full mx-auto">
                        {members.map(member => (
                            <div key={member.id} className="person-hover relative">
                                <img src={member.img} alt="photos" />
                                <h1 className="text-xl md:pt-5 pt-2 font-bold">{member.name}</h1>
                                <h3 className="text-base font-medium opacity-70">{member.position}</h3>
                                <div className="xl:hidden block flex gap-4 mt-2 mb-5">
                                    <img className="w-6" src={member.twitterIcon} alt="twitter-icons" />
                                    <img className="w-6" src={member.linkedinIcon} alt="twitter-icons" />
                                </div>
                                <div className="xl:block hidden blind absolute top-0 left-0 w-full h-full bg-white opacity-60 pt-28 pl-28">
                                    <div className="flex gap-4">
                                        <img className="max-w-7xl" src={member.twitterIcon} alt="twitter-icons" />
                                        <img className="max-w-7xl" src={member.linkedinIcon} alt="twitter-icons" />
                                    </div>
                                </div>
                            </div>
                        ))}
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