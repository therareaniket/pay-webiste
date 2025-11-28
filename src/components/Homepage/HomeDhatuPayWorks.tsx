"use client"
import Slider from "react-slick";

export default function HomeDhatuPayWorks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

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
                            <div className="dp-work-slide-item active-slide">
                                <div className="slide-item-icon site-radius-10">
                                    <span className="icon-hm-onboard"></span>
                                </div>

                                <div className="slide-item-details">
                                    <h3 className="h5">Onboard Entities & Trial Sites</h3>

                                    <p className="text-18">Easily register Sponsors, CROs, Sites and other stakeholders with secure verification.</p>
                                </div>
                            </div>

                            <div className="dp-work-slide-item">
                                <div className="slide-item-icon site-radius-10">
                                    <span className="icon-hm-onboard"></span>
                                </div>

                                <div className="slide-item-details">
                                    <h3 className="h5">Onboard Entities & Trial Sites</h3>

                                    <p className="text-18">Easily register Sponsors, CROs, Sites and other stakeholders with secure verification.</p>
                                </div>
                            </div>

                            <div className="dp-work-slide-item">
                                <div className="slide-item-icon site-radius-10">
                                    <span className="icon-hm-onboard"></span>
                                </div>

                                <div className="slide-item-details">
                                    <h3 className="h5">Onboard Entities & Trial Sites</h3>

                                    <p className="text-18">Easily register Sponsors, CROs, Sites and other stakeholders with secure verification.</p>
                                </div>
                            </div>

                            <div className="dp-work-slide-item">
                                <div className="slide-item-icon site-radius-10">
                                    <span className="icon-hm-onboard"></span>
                                </div>

                                <div className="slide-item-details">
                                    <h3 className="h5">Onboard Entities & Trial Sites</h3>

                                    <p className="text-18">Easily register Sponsors, CROs, Sites and other stakeholders with secure verification.</p>
                                </div>
                            </div>

                            <div className="dp-work-slide-item">
                                <div className="slide-item-icon site-radius-10">
                                    <span className="icon-hm-onboard"></span>
                                </div>

                                <div className="slide-item-details">
                                    <h3 className="h5">Onboard Entities & Trial Sites</h3>

                                    <p className="text-18">Easily register Sponsors, CROs, Sites and other stakeholders with secure verification.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}