import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { services } from '../constants';

import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxArrowTopRight
} from 'react-icons/rx';

import { FreeMode, Pagination } from 'swiper/modules';
const ServiceSlider = () => {
    return (
        <Swiper breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 25
            },

        }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className='h-[240px] sm:h-[340px]'
            style={{ '--swiper-pagination-color': '#F13024' }} // Set custom color

        >
            {
                services.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='w-full'>
                            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex xl:flex-col  justify-between items-center gap-x-6 gap-y-6  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                                <div className='flex justify-center'>
                                    <img className='w-16 h-16 object-contain text-accent' src={item.icon} alt={item.title} />
                                </div>
                                <div className='flex justify-center'>
                                    <div >{item.title}</div>
                                </div>
                                <div className="flex text-3xl">
                                    <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                                </div>
                            </div>



                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default ServiceSlider
