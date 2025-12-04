import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
    return (
        <section className="section sub-site-hero solution-hero">
            <span className="light-orange-box"></span>

            <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

            <div className="container">
                <div className="hero-details-wrapper coming-soon-hero-wrapper">
                    <div className="subpage-hero-details">
                        <Image className='coming-soon-img' src="/images/comingsoonpage.png" alt='' width={524} height={474}></Image>
                    </div>

                    <div className="coming-soon-text">
                        <Link href="/" className="headerLogo comming-soon-logo">
                            <Image
                                src="/images/logo/headerLogo.svg"
                                alt="header-logo"
                                width={176}
                                height={34}
                                priority
                            />
                        </Link>

                        <p className='text-md h5'>Coming Soon...</p>

                        <Link
                            href="/Contact"
                            title="Book a Demo"
                            className=" link-padding site-radius-100  comin-soon-btn"
                        >
                            Get Early Access
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon