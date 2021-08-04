// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Footer from "./components/Footer"
import Header from "./components/Header"
// import LeafletMap from "./components/LeafletMap"
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
            setErrorMessage('Fill All Fields')
        } else {
            setErrorMessage('Submitted S')
        }
        console.log("HELLO")
    }
    
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

            <section className="md:w-9/12 w-11/12 mx-auto my-32">
                <div><p class="border-gray-600 border-b w-28"></p></div>
                <div className="flex justify-between pt-28 items-center relative md:flex-row flex-col">
                    <div className="w-4/12">
                        <h1 className="sub-header mb-16 text-black">Contact Details</h1>
                    </div>
                    <div className="w-4/12 cd">
                        <h1 className="font-bold">Main Office</h1>
                        <h1>Mail: archone@mail.com</h1>
                        <h1>Address : 1892 Chenoweth Drive TN</h1>
                        <h1>Phone : 123-456-3451</h1>
                        <div className="flex items-center gap-5">
                            <h1>View on Map </h1>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-arrow -black.svg'} alt="arrow-right"/>
                        </div>
                    </div>
                    <div className="w-4/12 cd">
                        <h1 className="font-bold">Office II</h1>
                        <h1>Mail: archone@mail.com</h1>
                        <h1>Address : 1892 Chenoweth Drive TN</h1>
                        <h1>Phone : 123-456-3451</h1>
                        <div className="flex items-center gap-5">
                            <h1>View on Map </h1>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-arrow -black.svg'} alt="arrow-right"/>
                        </div>
                    </div>
                </div>
            </section>

            <div id="map" className="h-96 w-full bg-black my-12 text-white">MAP</div>
            {/* <LeafletMap /> */}

            <section className=" w-9/12 mx-auto">
                <div className="flex justify-between pt-28 items-center relative md:flex-row flex-col">
                    <div className="w-4/12">
                        <h1 className="sub-header mb-16 text-black">Connect <br></br> With Us</h1>
                    </div>

                    
                    <form onSubmit={validateForm} className="w-7/12 cd">
                        <div>
                            <label className="el-label">Name</label>
                            <p>{ errorMessage }</p>
                        </div>
                        <input type="text"
                            value={ name } onChange={(e) => setName(e.currentTarget.value)}
                            className="input-group focus:outline-none"
                        />
                        <label className="el-label">Email</label>
                        <input type="text"
                            value={ email } onChange={(e) => setEmail(e.currentTarget.value)}
                            className="input-group focus:outline-none"
                        />
                        <label className="el-label">Your Message</label>
                        <input type="text"
                            value={ message } onChange={(e) => setMessage(e.currentTarget.value)}
                            className="input-group focus:outline-none"
                        />

                        <div className="flex justify-end mt-5">
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