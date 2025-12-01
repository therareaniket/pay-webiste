"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomeTestimonials() {
    
    const testimonialsData = [
        {
            review: "DhatuPay has completely transformed the way we handle payments on our portal. The integration was seamless, and the security features give us and our customers complete peace of mind.",
            author: "Rajesh Mehta",
            position: "Founder, EduConnect Portal",
        },
        {
            review: "The platform connected our ERP and banking systems effortlessly, eliminating the complexity of manual reconciliations. Real-time synchronization has saved us countless hours of work.",
            author: "Prajakta Modi",
            position: "Operations Head, Global Pharma",
        },
        {
            review: "Identity management and compliance features gave us peace of mind. We trust the system for all critical workflows. It ensures strict adherence to regulatory standards.",
            author: "Anshika Khanna",
            position: "CFO, FinTech Solutions",
        },
    ];
    return (
        <>
            <section className="section testimonials">
                <div className="container">
                    <h2>What Customers Say About DhatuPay</h2>

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