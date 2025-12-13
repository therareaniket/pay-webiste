"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type RegulatoryProps = {
    regulatoryTitle: string;
    regulatorySubtitle: string;
    regulatorySlide1Details: string;
    regulatorySlide2Details: string;
    regulatorySlide3Details: string;
    regulatorySlide4Details: string;
}

export default function RegulatoryConfidence ( {regulatoryTitle, regulatorySubtitle, regulatorySlide1Details, regulatorySlide2Details, regulatorySlide3Details, regulatorySlide4Details}: RegulatoryProps ) {

    const Regulatoryslides = [
        {
            icon: "icon-immutable-audit",
            title: "Immutable Audit Trails",
            desc: regulatorySlide1Details,
            bgColor: "bg-[#CDD8FF]",
            iconBgColor: "bg-[#557CFF]",
        },
        {
            icon: "icon-digital-signature",
            title: "Digital Signatures",
            desc: regulatorySlide2Details,
            bgColor: "bg-[#D1EAD3]",
            iconBgColor: "bg-[#87C88E]",
        },
        {
            icon: "icon-security-architecture",
            title: "Jurisdiction Packs",
            desc: regulatorySlide3Details,
            bgColor: "bg-[#DDD2FE]",
            iconBgColor: "bg-[#A78BFC]",
        },
        {
            icon: "icon-vendor-regualatory-payments",
            title: "Data Residency",
            desc: regulatorySlide4Details,
            bgColor: "bg-[#FEE4D2]",
            iconBgColor: "bg-[#FBB98A]",
        }
    ];

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="regulatory-headings">
                        <h2>{regulatoryTitle}</h2>

                        <p className="h6 text-rg">{regulatorySubtitle}</p>
                    </div>

                    {/* <div className="regulatory-nav flex gap-4 mb-6">
                        <button className="reg-prev-btn"><span>{"<"}</span></button>
                        <button className="reg-next-btn"><span>{">"}</span></button>
                    </div> */}

                    <div className="regulatory-slider">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            breakpoints={{
                                600: { slidesPerView: 1 },
                                800: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 }
                            }}
                            navigation={{
                                nextEl: ".reg-next-btn",
                                prevEl: ".reg-prev-btn",
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            loop={true}
                            className="regulatory-swiper-slider">
                            {Regulatoryslides.map((slide, index) => (
                                <SwiperSlide key={index} className={`regulatory-slide-item site-radius-20 ${slide.bgColor}`}>
                                    <div className={`regulatory-item-icon site-radius-10 ${slide.iconBgColor}`}>
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
                </div>  
            </section>
        </>
    );
}