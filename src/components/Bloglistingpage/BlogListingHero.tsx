"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

const BlogSlider = () => {
  return (
    <div className="blog-slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={60}
        className="blog-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-card">
            <div className="blog-hero-image">
              <Image
                src="/images/bloglisting/bloghero-img-1.webp"
                alt="blog"
                width={1400}
                height={700}
                className="slide-img"
              />
            </div>

            <div className="blog-hero-content">
              <h2 className="h5 text-md">Payment Solutions</h2>
              <h1 className="h2 text-md">
                Simplifying Digital Transactions for Businesses
              </h1>
              <p className="text-18 text-md">
                Discover how Dhatupay is transforming payment experiences with secure,
                fast, and integrated solutions for every portal.
              </p>
              <p className="text-18 text-md">Nov 20 • 5 min read</p>
              <Link href="/" className="site-radius-20 link-padding">
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-card">
            <div className="blog-hero-image">
              <Image
                src="/images/bloglisting/bloghero-img-2.webp"
                alt="blog"
                width={1400}
                height={700}
                className="slide-img"
              />
            </div>

            <div className="blog-hero-content">
              <h2 className="h5 text-md">Fintech Insights</h2>
              <h1 className="h2 text-md">
                The Future of Payment Gateways: Trends to Watch
              </h1>
              <p className="text-18 text-md">
                Stay ahead with insights on evolving payment technologies and integration
                strategies for seamless transactions.
              </p>
              <p className="text-18 text-md">Nov 18 • 4 min read</p>
              <Link href="/" className="site-radius-20 link-padding">
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-card">
            <div className="blog-hero-image">
              <Image
                src="/images/bloglisting/bloghero-img-3.webp"
                alt="blog"
                width={1400}
                height={700}
                className="slide-img"
              />
            </div>

            <div className="blog-hero-content">
              <h2 className="h5 text-md">Digital Marketplace</h2>
              <h1 className="h2 text-md">
                Building Secure Payment Ecosystems Digitally
              </h1>
              <p className="text-18 text-md">
                Learn how robust security and smart integration can redefine your digital
                payment experience.
              </p>
              <p className="text-18 text-md">Nov 15 • 6 min read</p>
              <Link href="/" className="site-radius-20 link-padding">
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
