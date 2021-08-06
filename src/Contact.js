import Footer from "./components/Footer"
import Header from "./components/Header"
import LeafletMap from "./components/LeafletMap"
import { useState } from "react"
import Button from "./components/Button"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const validateForm = (e) => {
        e.preventDefault();
        if( name.length < 2 && email.length < 2 && message.length < 2 ) {
            setErrorMessage('This field can\'t be empty')
            setInterval(() => {
                setErrorMessage('')
              }, 5000)
            
        } else {
            alert('Submitted')
        }
        setName('')
        setEmail('')
        setMessage('')
    }
    
    return ( 
        <div>
            <Header title="CONTACT"/>
            <section data-aos="fade-left" className="md:w-9/12 sm:w-11/12 w-full mx-auto">
                <div className="flex md:items-end md:flex-row flex-col">
                    <div className="xl:w-6/12 w-9/12">
                        <img className="max-w-7xl md:block hidden" src={process.env.PUBLIC_URL + 'assets/contact/desktop/image-hero.jpg'} alt="photos"/>
                        <img className="max-w-7xl about-hero md:hidden block" src={process.env.PUBLIC_URL + 'assets/contact/tablet/image-hero.jpg'} alt="photos" />
                    </div>
                    <div className="flex flex-col flex-end">
                        <h1 className="xl:-ml-52 lg:-ml-72 -ml-96 big-text">Contact</h1>
                        <div className="bg-white whitey md:w-full w-11/12 -mt-12 xl:-ml-48 lg:-ml-72 md:-ml-96 -ml-0 ml-0">
                            <div className="md:w-10/12 w-11/12 md:py-20 py-16 mx-auto">
                                <h1 className="sub-header lg:mb-16 mb-6 text-black">Tell us about your project</h1>
                                <p className="p-text"> We’d love to hear more about your project. Please,
                                    leave a message below or give us a call. We have two
                                    offices, one in Texas and one in Tennessee. If you find
                                    yourself nearby, come say hello!
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="md:w-9/12 w-11/12 mx-auto md:my-32">
            <div><p class="md:block hidden lg:mb-0 mb-10 border-gray-600 border-b lg:w-28 w-16"></p></div>
                <div data-aos="fade-up" className="flex justify-between lg:pt-28 items-center relative lg:flex-row flex-col">
                    <div className="lg:w-4/12 w-full">
                        <h1 className="sub-header lg:mb-16 mb-6 text-black">Contact Details</h1>
                    </div>
                    <div className="lg:w-4/12 w-full cd">
                        <h1 className="font-bold">Main Office</h1>
                        <h1>Mail: archone@mail.com</h1>
                        <h1>Address : 1892 Chenoweth Drive TN</h1>
                        <h1>Phone : 123-456-3451</h1>
                        <div className="flex items-center gap-5">
                            <h1>View on Map </h1>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-arrow -black.svg'} alt="arrow-right"/>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full cd lg:mt-0 mt-8">
                        <h1 className="font-bold">Office II</h1>
                        <h1>Mail: archone@mail.com</h1>
                        <h1>Address : 3399 Wines Lane TX</h1>
                        <h1>Phone : 832-123-4321</h1>
                        <div className="flex items-center gap-5">
                            <h1>View on Map </h1>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-arrow -black.svg'} alt="arrow-right"/>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="zoom-in" className="mapie md:w-9/12 w-full mx-auto bg-black my-12 overflow-hidden">
                <LeafletMap />
            </div>
            

            <section data-aos="fade-up" className="md:w-9/12 w-11/12 mx-auto">
                <div className="flex justify-between md:pt-28 pt-10 items-center relative md:flex-row flex-col">
                    <div className="md:w-4/12 w-full">
                        <h1 className="sub-header md:block hidden lg:mb-16 mb-6 text-black">Connect <br></br> With Us</h1>
                        <h1 className="sub-header lg:mb-16 md:hidden block mb-6 text-black">Connect With Us</h1>
                    </div>

                    
                    <form onSubmit={validateForm} className="md:w-7/12 w-full cd">
                        <div className="flex-between">
                            <label className="el-label">Name</label>
                            <p className="text-xs text-red-500 font-bold">{ errorMessage }</p>
                        </div>
                        <input type="text"
                            value={ name } onChange={(e) => setName(e.currentTarget.value)}
                            className="input-group focus:outline-none"
                        />
                        <div className="flex-between">
                            <label className="el-label">Email</label>
                            <p className="text-xs text-red-500 font-bold">{ errorMessage }</p>
                        </div>
                        <input type="text"
                            value={ email } onChange={(e) => setEmail(e.currentTarget.value)}
                            className="input-group focus:outline-none"
                        />
                        <div className="flex-between">
                            <label className="el-label">Your Message</label>
                            <p className="text-xs text-red-500 font-bold">{ errorMessage }</p>
                        </div>
                        <input type="text"
                            value={ message } onChange={(e) => setMessage(e.currentTarget.value)}
                            className="input-group focus:outline-none"
                        />

                        <div className="flex justify-end md:mt-5 mt-2 md:mb-0 mb-20">
                            <Button type="submit" className="" text=""/>
                        </div>
                    </form>
                </div>
            </section>

            <div>
                <Footer />
            </div>
        </div>
     );
}
 
export default Contact;