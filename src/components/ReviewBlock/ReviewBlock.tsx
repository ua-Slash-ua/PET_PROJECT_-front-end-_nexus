'use client';
import s from './ReviewBlock.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {reviewData} from "@/data/reviews.data";

// import 'swiper/css';
// import 'swiper/css/navigation';
import Image from "next/image";

export default function ReviewBlock() {
    return (
        <>
            <section id='sponsors' className={s.section_review}>
                <header className={s.review_header}>
                    <span >What Past Attendees Say</span>

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
                        spaceBetween={100}
                        // initialSlide={2}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSwiper={(swiper) => {
                            swiper.slideToLoop(1); // або будь-який індекс, наприклад, 1 або 2
                        }}
                        loop={true}
                        className={s.swiper}
                    >
                        {
                            reviewData.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className={s.review_item}>
                                        <div className={s.title}>
                                            <span>
                                               {review.title}
                                            </span>
                                        </div>
                                        <div className={s.review}>
                                            <span>
                                                {review.review}
                                            </span>

                                        </div>
                                        <div className={s.about}>
                                            <div className={s.about_image}>
                                                <Image
                                                    src={review.photo}
                                                    alt={review.name}
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className={s.about_content}>
                                            <span>
                                                {review.name}
                                            </span>
                                            <span>
                                                {review.position}
                                            </span>
                                            </div>
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