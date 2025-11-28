"use client"
import Slider from "react-slick";
import { SetStateAction, useState } from "react";

export default function HomeDhatuPayWorks() {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current: any, next: SetStateAction<number>) => setActiveSlide(next),
        cssEase: "ease-in-out",
    };

    const slides = [
        {
            icon: "icon-hm-onboard",
            title: "Onboard Entities & Sites",
            desc: "Securely register Sponsors, CROs, Sites, and stakeholders with automated verification.​"
        },
        {
            icon: "icon-hm-config-contract",
            title: "Configure Budgets & Contracts",
            desc: "Centralize budgets, agreements, and compliance rules for seamless setup."
        },
        {
            icon: "icon-pay-via",
            title: "Trigger Payments via Events",
            desc: "Automate payouts on milestones, visits, or triggers for real-time efficiency."
        },
        {
            icon: "icon-disburse",
            title: "Disburse & Reconcile",
            desc: "Instant global payments with accurate reconciliation and full transparency."
        },
    ];

    return (
        <>
            <section className="section dhatupay-works" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="works-headings">
                        <h2>How DhatuPay Works</h2>

                        <p className="h6 text-rg">Streamlined clinical trial payments from onboarding to global payouts.</p>
                    </div>

                    <div className="dp-work-slider">
                        <Slider {...settings}>
                            {slides.map((slide, index) => (
                            <div key={index} className={`dp-work-slide-item ${activeSlide === index ? "active-slide" : ""}`} >
                                <div className="slide-item-icon site-radius-10">
                                    <span className={slide.icon}></span>
                                </div>

                                <div className="slide-item-details">
                                    <h3 className="h5">{slide.title}</h3>
                                    <p className="text-18">{slide.desc}</p>
                                </div>
                            </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}