"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

export default function DhatuPayWorksSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            icon: "icon-hm-onboard",
            title: "Onboard Entities and Sites",
            desc: "Securely register Sponsors, CROs, Sites, and stakeholders with automated verification.​"
        },
        {
            icon: "icon-hm-config-contract",
            title: "Configure Contracts",
            desc: "Centralize budgets, agreements, and compliance rules for seamless setup."
        },
        {
            icon: "icon-pay-via",
            title: "Payments via Events",
            desc: "Automate payouts on milestones, visits, or triggers for real-time efficiency."
        },
        {
            icon: "icon-disburse",
            title: "Disburse and Reconcile",
            desc: "Instant global payments with accurate reconciliation and full transparency."
        }
    ];

    return (
        <section className="section dhatupay-works" style={{ paddingTop: 0 }}>
            <div className="container">
                <div className="works-headings">
                    <h2>How DhatuPay Works</h2>
                    <p className="h6 text-rg">
                        Streamlined clinical trials payments from onboarding to global payouts.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        600: { slidesPerView: 1 },
                        800: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 }
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    // onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                    onSlideChange={(swiper) => { const real = swiper.realIndex; const middleIndex = (real + 1) % slides.length;  setActiveSlide(middleIndex); }}
                    className="dp-work-slider">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className={`dp-work-slide-item ${activeSlide === index ? "active-slide" : ""}`}>
                            <div className="slide-item-icon site-radius-10">
                                <span className={slide.icon}></span>
                            </div>

                            <div className="slide-item-details">
                                <h3 className="h5">{slide.title}</h3>
                                <p className="text-18">{slide.desc}</p>
                            </div>

                            <span className="slider-bottom-line"></span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
