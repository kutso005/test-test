import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../assets/image/bani1.jpg"
import img2 from "../../assets/image/bani2.jpg"
import img3 from "../../assets/image/bani3.jpg"

const data = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
]

export default function CompanyProjects() {
    return (
        <div className='companyProjects'>
            <div className="wrap">
                <div className="projects">
                    <h3 className='dark-grey center'> ПРОЕКТЫ КОМПАНИИ </h3>
                    <div className="btns center">
                        <button className='btn-succes'> БАНИ </button>
                        <button className='btn-outline'> ДОМА </button>
                    </div>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="center"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className='img center' src={item.image} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
