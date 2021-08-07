import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay  } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Button from './Button';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay ]);

const Swipe = () => {
  const [slides] = useState([
    {
        id: 1, 
        name:'Project Paramour', 
        text:'Project made for an art museum near SouthwestLondon. Project Paramour is a statement of bold,modern architecture.',
        img:'assets/home/desktop/image-hero-paramour.jpg',
        imgT:'assets/portfolio/tablet/image-hero-paramour.jpg',
        imgM:'assets/portfolio/mobile/image-hero-paramour.jpg',
    },
    {
        id: 2, 
        name:'Seraph Station', 
        text:' The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
        img:'assets/home/desktop/image-hero-seraph.jpg',
        imgT:'assets/portfolio/tablet/image-hero-seraph.jpg',
        imgM:'assets/portfolio/mobile/image-hero-seraph.jpg',
    },
    {
        id: 3, 
        name:'Federal II Tower', 
        text:'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
        img:'assets/home/desktop/image-hero-federal.jpg',
        imgT:'assets/portfolio/tablet/image-hero-federal.jpg',
        imgM:'assets/portfolio/mobile/image-hero-federal.jpg',
    },
    {
        id: 4, 
        name:'Trinity Bank Tower', 
        text:'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
        img:'assets/home/desktop/image-hero-trinity.jpg',
        imgT:'assets/portfolio/tablet/image-hero-trinity.jpg',
        imgM:'assets/portfolio/mobile/image-hero-trinity.jpg',
    },
    
]);

  const pagination = {
    "clickable": true,
    "renderBullet": function (index, swiper) {
            return '<span class=\"' + swiper + '\">' + '0'+(index + 1) + '</span>';
          }
  }


    return ( 
        <Swiper
        pagination={pagination}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          "delay": 4000,
          "disableOnInteraction": false
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        
        {(slides.map((slide) => (
          <SwiperSlide key={slide.id}>
          <div data-aos="fade-right" className="h-screen swipe-div relative w-full bg-black">
              <img src={ slide.img } />
              <div className="bg-black w-full h-full opacity-30 absolute top-0"></div>
              <div className="absolute w-full h-full top-0 left-0">
                  <div className="xl:w-8/12 md:w-10/12 w-11/12 mx-auto md:pt-40 pt-28">
                    <div className="xl:w-8/12 md:w-10/12 w-11/12">
                      <h1 className="slider-header mb-5"> { slide.name }</h1>
                      <p className="slider-text mb-8">{ slide.text }</p>
                      <Link to="/portfolio">
                        <Button text="View "/>
                      </Link>
                    </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        )))}


        
        
      </Swiper>

      
     );
}
 
export default Swipe;