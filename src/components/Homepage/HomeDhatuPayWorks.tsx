"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

type DhatuPayWorksSliderProps = {
    howDhatupayWorksTitle: string;
	howDhatupayWorksSubtitle: string;
	dhatupayWorksSlider : {
		homeWorksCard1Title: string;
		homeWorksCard2Title: string;
		homeWorksCard3Title: string;
		homeWorksCard4Title: string;
		homeWorksCard1Subtitle: string;
		homeWorksCard2Subtitle: string;
		homeWorksCard3Subtitle: string;
		homeWorksCard4Subtitle: string;
	}
}

export default function DhatuPayWorksSlider( { howDhatupayWorksTitle, howDhatupayWorksSubtitle, dhatupayWorksSlider }: DhatuPayWorksSliderProps ) {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            icon: "icon-hm-onboard",
            title: dhatupayWorksSlider.homeWorksCard1Title,
            desc: dhatupayWorksSlider.homeWorksCard1Subtitle,
        },
        {
            icon: "icon-hm-config-contract",
            title: dhatupayWorksSlider.homeWorksCard1Title,
            desc: dhatupayWorksSlider.homeWorksCard2Subtitle,
        },
        {
            icon: "icon-pay-via",
            title: dhatupayWorksSlider.homeWorksCard1Title,
            desc: dhatupayWorksSlider.homeWorksCard3Subtitle,
        },
        {
            icon: "icon-disburse",
            title: dhatupayWorksSlider.homeWorksCard1Title,
            desc: dhatupayWorksSlider.homeWorksCard4Subtitle,
        }
    ];

    return (
        <section className="section dhatupay-works" style={{ paddingTop: 0 }}>
            <div className="container">
                <div className="works-headings">
                    <h2>{howDhatupayWorksTitle}</h2>
                    <p className="h6 text-rg">{howDhatupayWorksSubtitle}</p>
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
