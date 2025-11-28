"use client"
import Image from "next/image";
import Slider from "react-slick";


export default function BloglistingHero() {
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
            <div className="container">
                   
                <div className="blog-hero-wrapper">
                    <Image src="/images/bloglisting/bloghero-img-1.webp" alt="" width={1400} height={700} priority={false}></Image>
                    <Image src="/images/bloglisting/bloghero-img-2.webp" alt="" width={1400} height={700} priority={false}></Image>
                    <Image src="/images/bloglisting/bloghero-img-3.webp" alt="" width={1400} height={700} priority={false}></Image>
                </div>
              
            </div>
        </>
    );
}


