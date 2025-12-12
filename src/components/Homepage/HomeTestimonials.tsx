"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

export default function HomeTestimonials({testimonialsTitle, testimonialList}: TestimonialsProps) {
    
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
                        modules={[Autoplay, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="testimonial-slider">
                        {testimonialsData.map((slide, index) => (
                            <SwiperSlide key={index} className={`testimonial-slide-item`}>
                                <div className="slide-item-details">
                                    <h3 className="h4 text-rg">"{slide.review}"</h3>

                                    <h4 className="h5">{slide.author}</h4>

                                    <p className="text-18">{slide.position}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div className="testim-slider-dots">
                        <button className="testim-slider-bullet h4" style={{ marginBottom: 0 }}>R</button>
                        <button className="testim-slider-bullet h4" style={{ marginBottom: 0 }}>P</button>
                        <button className="testim-slider-bullet h4" style={{ marginBottom: 0 }}>A</button>
                    </div> */}
                </div>
            </section>
        </>
    );
}