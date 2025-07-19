'use client';
import s from './ReviewBlock.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {reviewData} from "@/data/reviews.data";

import 'swiper/css';
import 'swiper/css/navigation';
export default function ReviewBlock(){
    return(
        <>
            <section id='sponsors' className={s.section_review}>
                <header className={s.review_header}>
                    <span>What Past Attendees Say</span>

                    <div className={s.arrows}>
                        <div className="swiper-button-prev">←</div>
                        <div className="swiper-button-next">→</div>
                    </div>
                </header>

                <div className={s.review_content}>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                        className={s.swiper}
                    >
                        {
                            reviewData.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className={s.review_item}>
                                        <div className={s.title}>
                                            {review.title}
                                        </div>
                                        <div className={s.review}>
                                            {review.review}
                                        </div>
                                        <div className={s.about}>

                                        </div>
                                    </div>
                                </SwiperSlide>)
                            )
                        }

                    </Swiper>
                </div>
            </section>
        </>
    )
}