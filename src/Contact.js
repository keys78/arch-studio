import Header from "./components/Header"

const Contact = () => {
    return ( 
        <div>
            <Header title="CONTACT"/>
            <section className="md:w-9/12 w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col">
                    <div className="xl:w-6/12 lg:w-5/12 w-3/12">
                        <img className="max-w-7xl" src={process.env.PUBLIC_URL + 'assets/contact/desktop/image-hero.jpg'} alt="photos"/>
                    </div>
                    <div className="relative flex flex-col flex-end">
                        <h1 className="-ml-52 big-text">Contact</h1>
                        <div className="bg-white -ml-40">
                            <div className="w-7/12 py-36 mx-auto">
                                <h1 className="sub-header mb-16 text-black">Tell us about your project</h1>
                                <p> We’d love to hear more about your project. Please,
                                    leave a message below or give us a call. We have two
                                    offices, one in Texas and one in Tennessee. If you find
                                    yourself nearby, come say hello!
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="md:w-9/12 w-11/12 mx-auto my-12">
                <div><p class="border-gray-600 border-b w-28"></p></div>
                <div className="flex items-center relative md:flex-row flex-col">
                    <div className="">
                        <h1 className="sub-header mb-16 text-black">Contact Details</h1>
                    </div>
                    <div className="cd">
                        <h1 className="font-bold">Main Office</h1>
                        <h1>Mail: archone@mail.com</h1>
                        <h1>Address : 1892 Chenoweth Drive TN</h1>
                        <h1>Phone : 123-456-3451</h1>
                        <div className="flex gap-5">
                            <h1>View on Map </h1>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-arrow.svg'} alt="arrow-right"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Contact;