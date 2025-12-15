"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogListingHero() {

	const blogSlides = [
        {
			blogTitle: "Digital Signature: The Secure, Paperless Way to Sign Documents",
			blogSubtitle: "Explore Digital Signature: using cryptographic techniques rather than handwritten ink.",
            blogType: "Digital Signature",
			blogTime: "Dec 09 • 15 min read",
			blogLink: "/DigitalSignature-TheSecure-PaperlessWaytoSignDocuments",
			blogImage: "/images/bloglisting/digital-signature.webp",
        },
		{
			blogTitle: "One-Stop Payment Platform for Clinical Trials",
			blogSubtitle: "Reduced administrative burden: less paperwork, fewer manual tasks, automated workflows.",
            blogType: "Payment Integration",
			blogTime: "Dec 09 • 10 min read",
			blogLink: "/Why-Clinical-Trial-Portals-Need-One-Stop-Payment-Platform",
			blogImage: "/images/bloglisting/blog-hero-new-img-2-webp.webp",
        },
		{
			blogTitle: "Digital Payments — Understanding the Benefits",
			blogSubtitle: "Transactions done electronically — no cash or checks. Digital wallets/e-wallets, payment gateways, virtual accounts, etc.",
            blogType: "Digital Payments",
			blogTime: "Dec 09 • 11 min read",
			blogLink: "/DigitalPayments-101",
			blogImage: "/images/bloglisting/bloghero-img-3.webp",
        },
        
    ];

	return (
		<>
			<section className="blog-slider">
				<div className="blog-hero-slider">
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						spaceBetween={10}
						slidesPerView={1}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						loop={true}
						pagination={{ clickable: true }}
						className="blog-swiper-slider">
						{blogSlides.map((slide, index) => (
							<SwiperSlide key={index} className={`blog-slide-item`}>
								<Image src={slide.blogImage} alt="slider-image" width={1400} height={700}></Image>
								
								<div className="slider-item-details">
									<div className="container">
										<span className="h5 text-md">{slide.blogType}</span>

										<h2 className="text-md">{slide.blogTitle}</h2>

										<p className="text-18">{slide.blogSubtitle}</p>

										<p className="text-18">{slide.blogTime}</p>

										<Link href={slide.blogLink} title="Read More" className="text-18 link-padding blog-link">Read More</Link>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
}