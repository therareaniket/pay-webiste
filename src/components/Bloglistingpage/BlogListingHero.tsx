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
			blogTitle: "Simplifying Digital Transactions for Businesses",
			blogSubtitle: "Discover how DhatuPay is transforming payment experiences with secure, fast, and integrated solutions for every portal.",
            blogType: "Payment Solutions",
			blogTime: "Nov 20 • 5 min read",
			blogLink: "/BlogDetail",
			blogImage: "/images/bloglisting/bloghero-img-1.webp",
        },
		{
			blogTitle: "The Future of Payment Gateways: Trends to Watch",
			blogSubtitle: "Stay ahead with insights on evolving payment technologies and integration strategies for seamless transactions.",
            blogType: "Fintech Insights",
			blogTime: "Nov 18 • 4 min read",
			blogLink: "/BlogDetail",
			blogImage: "/images/bloglisting/bloghero-img-2.webp",
        },
		{
			blogTitle: "Building Secure Payment Ecosystems Digitally",
			blogSubtitle: "Learn how robust security and smart integration can redefine your digital payment experience.",
            blogType: "Digital Marketplace",
			blogTime: "Nov 15 • 6 min read",
			blogLink: "/BlogDetail",
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