import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
    return (
        <>
            <section className="section hero-home comingsoon">
                <span className="light-orange-box"></span>

                <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

                <div className="container">
                    <div className="comingsoon-wrapper">
                        <Image className='coming-soon-image' src="/images/comingsoon.webp" alt="comingsoon" width={524} height={475} priority={true}></Image>

                        <div className="comingsoon-content">
                            <Image src="/images/logo-comingsoon.svg" alt='logo-comingsoon' width={280} height={62} priority={true}></Image>

                            <h1 className='h5 text-md' style={{ color: "#3A3A3A" }}>Coming Soon...</h1>

                            <h2 className='h5'>Pay Smarter, Faster</h2>

                            <Link href="/Contact#contactForm" title='' className='link-padding btn-blue text-18 text-md'>Get Early Access</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ComingSoon