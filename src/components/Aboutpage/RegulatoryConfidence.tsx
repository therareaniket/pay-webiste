"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function RegulatoryConfidence () {

    const Regulatoryslides = [
        {
            icon: "icon-immutable-audit",
            title: "Immutable Audit Trails",
            desc: "Maintain a permanent, tamper-proof record of every transaction and action to support full transparency and regulatory compliance.",
            bgColor: "bg-[#CDD8FF]",
            iconBgColor: "bg-[#557CFF]",
        },
        {
            icon: "icon-digital-signature",
            title: "Digital Signatures",
            desc: "Protect documents with secure, legally recognized digital signatures that preserve authenticity and data integrity.",
            bgColor: "bg-[#D1EAD3]",
            iconBgColor: "bg-[#87C88E]",
        },
        {
            icon: "icon-security-architecture",
            title: "Jurisdiction Packs",
            desc: "Stay compliant across regions with pre-configured packs for US, EU, and India, simplifying global operations with ready-to-use rules.",
            bgColor: "bg-[#DDD2FE]",
            iconBgColor: "bg-[#A78BFC]",
        },
        {
            icon: "icon-vendor-regualatory-payments",
            title: "Data Residency",
            desc: "Meet regional requirements by choosing where your data lives, while end‑to‑end encryption safeguards sensitive financial and participant information.",
            bgColor: "bg-[#FEE4D2]",
            iconBgColor: "bg-[#FBB98A]",
        }
    ];

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="regulatory-headings">
                        <h2>Regulatory Confidence for a Borderless World</h2>

                        <p className="h6 text-rg">Get field-level “before” snapshots for complete transparency, with every change inside the system captured and traceable.</p>
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