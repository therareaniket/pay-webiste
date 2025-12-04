

import Image from 'next/image'
import React from 'react'

const ContactForm = () => {
    return (
        <>
            <section className="section contact-main" id='contactForm'>
                <div className="container">
                    <div className="contact-form-top">
                        <div className="contact-left">
                            <div className="contact-head-main">
                                <h2 className='h3 text-md'>Your Questions Matter — We're Here to Help.</h2>

                                <p className='h6 text-grey text-rg'>Share your request and our team will get in touch shortly with secure payment solutions and seamless portal integration.</p>
                            </div>

                            <Image src="/images/contactpage/ContactFormGif.png" alt='ContactForm' width={559} height={367} priority={false}></Image>
                        </div>

                        <div className="contact-right">
                            <form className="contact-form">
                                <div className="row-2">
                                    <input className='site-radius-10 text-rg h6 text-grey' type="text" placeholder="Full Name" />
                                    <input className='site-radius-10 text-rg h6 text-grey' type="email" placeholder="Email Address" />
                                </div>

                                <input className='site-radius-10 text-rg h6 text-grey form-organization' type="text" placeholder="Organization Name" />

                                <textarea className='site-radius-10 text-rg h6 text-grey form-message' placeholder="Your Message"></textarea>

                                <button className='btn-padding text-rg h6 text-grey site-radius-100' type="submit">Send message</button>
                            </form>
                        </div>
                    </div>

                    <div className="contact-info-wrapper">
                        <div className="info-card info-card-mail site-radius-20">
                            <span className="icon-contact-mail"></span>
                            <div>
                                <h4 className='text-md h5'>Email</h4>
                                <p className='text-rg text-18 text-grey'>enquiry@adhatpay.com</p>
                            </div>
                        </div>

                        <div className="info-card info-card-call site-radius-20">
                            <span className="icon-contact-call"></span>
                            <div>
                                <h4 className='text-md h5'>Phone Number</h4>
                                <p className='text-rg text-18 text-grey'>+1 512 843 2002</p>
                            </div>
                        </div>

                        <div className="info-card info-card-location site-radius-20">
                            <span className="icon-contact-location"></span>
                            <div>
                                <h4 className='text-md h5'>Location</h4>
                                <p className='text-rg text-18 text-grey'>240, Newark, DE 19702, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm