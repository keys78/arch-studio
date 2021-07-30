import { useState } from "react";
import Header from "./components/Header"
import Data from "./components/data";
import Footer from "./components/Footer";

const Portfolio = ({ }) => {
    const [portfolios, setportfolios] = useState([
        {
            id: 1,
            category: 'none', 
            name: 'Seraph Station', 
            img:'assets/portfolio/desktop/image-seraph.jpg',
            imgT:'assets/portfolio/tablet/image-seraph.jpg',
            imgM:'assets/portfolio/mobile/image-seraph.jpg',
            date:"September 2019"
        },
        {
            id: 2,
            category: 'none', 
            name: 'Eebox Building', 
            img:'assets/portfolio/desktop/image-eebox.jpg',
            imgT:'assets/portfolio/tablet/image-eebox.jpg',
            imgM:'assets/portfolio/mobile/image-eebox.jpg',
            date:"August 2017"
        },
        {
            id:3,
            category: 'none', 
            name: 'Federal II Tower', 
            img:'assets/portfolio/desktop/image-federal.jpg',
            imgT:'assets/portfolio/tablet/image-federal.jpg',
            imgM:'assets/portfolio/mobile/image-federal.jpg',
            date:"March 2017"
        },
        {
            id: 5,
            category: 'featured', 
            name: 'Project Del Sol', 
            img:'assets/portfolio/desktop/image-del-sol.jpg',
            imgT:'assets/portfolio/tablet/image-del-sol.jpg',
            imgM:'assets/portfolio/mobile/image-del-sol.jpg',
            // numb:1,
            date:"January 2016"
        },
        {
            id: 6,
            category: 'featured',
            name: '228B Tower',
            img:'assets/portfolio/desktop/image-228b.jpg',
            imgT:'assets/portfolio/tablet/image-228b.jpg',
            imgM:'assets/portfolio/mobile/image-228b.jpg',
            // mumb:2,
            date:"September 2019"
        },
        {
            id: 4,
            category: 'featured', 
            name: 'Le Prototype', 
            img:'assets/portfolio/desktop/image-prototype.jpg',
            img:'assets/portfolio/desktop/image-prototype.jpg',
            img:'assets/portfolio/desktop/image-prototype.jpg',
            // numb:3,
            date:"October 2015"
        },
        {
            id:7,
            category: 'none', 
            name: 'Grand Edelweiss Hotel', 
            img:'assets/portfolio/desktop/image-edelweiss.jpg',
            imgT:'assets/portfolio/tablet/image-edelweiss.jpg',
            imgM:'assets/portfolio/mobile/image-edelweiss.jpg',
            date:"December 2013"
        },
        {
            id:8,
            category: 'none', 
            name: 'Netcry Tower', 
            img:'assets/portfolio/desktop/image-netcry.jpg',
            imgT:'assets/portfolio/tablet/image-netcry.jpg',
            imgM:'assets/portfolio/mobile/image-netcry.jpg',
            date:"August 2012"
        },
        {
            id:9,
            category: 'none', 
            name: 'Hypers', 
            img:'assets/portfolio/desktop/image-hypers.jpg',
            imgT:'assets/portfolio/tablet/image-hypers.jpg',
            imgM:'assets/portfolio/mobile/image-hypers.jpg',
            date:"January 2012"
        },
        {
            id:10,
            category: 'none', 
            name: 'SXIV', 
            img:'assets/portfolio/desktop/image-sxiv.jpg',
            imgT:'assets/portfolio/tablet/image-sxiv.jpg',
            imgM:'assets/portfolio/mobile/image-sxiv.jpg',
            date:"March 2011"
        },
        {
            id:11,
            category: 'none', 
            name: 'Trinity Bank Tower', 
            img:'assets/portfolio/desktop/image-trinity.jpg',
            imgT:'assets/portfolio/tablet/image-trinity.jpg',
            imgM:'assets/portfolio/mobile/image-trinity.jpg',
            date:"September 2010"
        },
        {
            id:12,
            category: 'none', 
            name: 'Project Paramour', 
            img:'assets/portfolio/desktop/image-paramour.jpg',
            imgT:'assets/portfolio/tablet/image-paramour.jpg',
            imgM:'assets/portfolio/mobile/image-paramour.jpg',
            date:"February 2008"
        },

    ]);




    return ( 
        <div>
            <Header title="PORTFOLIO"/>
            <div className="w-9/12 mx-auto mb-40">
                <Data portfolios={portfolios} />
            </div>
            <Footer />
        </div>
     );
}
 
export default Portfolio;