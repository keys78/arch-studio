import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay  } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Button from './Button';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay ]);

const Swipe = () => {
  const pagination = {
    "clickable": true,
    "renderBullet": function (index, swiper) {
            return '<span class=\"' + swiper + '\">' + (index + 1) + '</span>';
          }
  }


    return ( 
        <Swiper
        // className="mySwiper"
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="h-screen relative w-full bg-red-500">
              <img src="./assets/home/desktop/image-hero-paramour.jpg" />
              <div className="bg-black w-full h-full opacity-30 absolute top-0"></div>
              <div className="absolute w-full h-full top-0 left-0">
                  <div className="w-8/12 mx-auto pt-32">
                    <div className="w-6/12">
                      <h1 className="slider-header"> Project Paramour</h1>
                      <p className="slider-text"> Project made for an art museum near SouthwestLondon. Project Paramour is a
                          statement of bold,modern
                          architecture. 
                      </p>
                      <Button text="See Our Portfolio"/>
                    </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide > 
          <div className="h-screen relative w-full bg-red-500">
              <img src="./assets/home/desktop/image-hero-seraph.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-screen relative w-full bg-red-500">
              <img src="./assets/home/desktop/image-hero-federal.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="h-screen relative w-full bg-red-500">
              <img src="./assets/home/desktop/image-hero-trinity.jpg" />
          </div>
        </SwiperSlide>
        
      </Swiper>
     );
}
 
export default Swipe;