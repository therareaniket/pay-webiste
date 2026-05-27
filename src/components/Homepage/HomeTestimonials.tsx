'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type TestimonialsProps = {
    testimonialsTitle: string;
    testimonialList: {
        testimonials1Content: string;
        testimonials1Author: string;
        testimonials1Designation: string;
        testimonials2Content: string;
        testimonials2Author: string;
        testimonials2Designation: string;
        testimonials3Content: string;
        testimonials3Author: string;
        testimonials3Designation: string;
    }
}

export default function HomeTestimonials({ testimonialsTitle, testimonialList }: TestimonialsProps) {

    const testimonialsData = [
        {
            review: testimonialList.testimonials1Content,
            author: testimonialList.testimonials1Author,
            position: testimonialList.testimonials1Designation,
        },
        {
            review: testimonialList.testimonials2Content,
            author: testimonialList.testimonials2Author,
            position: testimonialList.testimonials2Designation,
        },
        {
            review: testimonialList.testimonials3Content,
            author: testimonialList.testimonials3Author,
            position: testimonialList.testimonials3Designation,
        },
    ];
    return (
        <>
            <section className="section testimonials">
                <div className="container">
                    <h2>{testimonialsTitle}</h2>

                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        // autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        navigation={{ nextEl: ".hm-testimonial-swiper-arrows-right", prevEl: ".hm-testimonial-swiper-arrows-left" }}
                        // navigation
                        className="testimonial-slider">
                        {testimonialsData.map((slide, index) => (
                            <SwiperSlide key={index} className={`testimonial-slide-item`}>
                                <div className="slide-item-details">
                                    <h3 className="h4 text-rg">&quot;{slide.review}&quot;</h3>

                                    <h4 className="h5 text-rg">{slide.author}</h4>

                                    <p className="text-18 text-rg text-grey">{slide.position}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}

                    <div className="testimonial-arrows-wrapper">
                        <div className="hm-testimonial-swiper-arrows-left">
                            <svg className="testimonial-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2632_2057" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                    <rect width="32" height="32" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2632_2057)">
                                    <path className="testimonial-svg-path" d="M18.666 24L10.666 16L18.666 8L20.5327 9.86667L14.3993 16L20.5327 22.1333L18.666 24Z" fill="#B8B8B8" />
                                </g>
                            </svg>
                        </div>

                        <div className="hm-testimonial-swiper-arrows-right">
                            <svg className="testimonial-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2632_2060" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                    <rect x="32" y="32" width="32" height="32" transform="rotate(-180 32 32)" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2632_2060)">
                                    <path className="testimonial-svg-path" d="M13.334 8L21.334 16L13.334 24L11.4673 22.1333L17.6007 16L11.4673 9.86667L13.334 8Z" fill="#B8B8B8" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}