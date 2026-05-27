'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import FormSubmission from './FormSubmission';

type ContactFormProps = {
    contactFormTitle: string;
    contactFormSubtitle: string;

    contactEmail: string;
    contactPhone: string;
    contactLocation: string;
}

const ContactForm = ({ contactFormTitle, contactFormSubtitle, contactEmail, contactPhone, contactLocation }: ContactFormProps) => {
    const infoWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = infoWrapperRef.current
        if (!wrapper) return

        const cards = wrapper.querySelectorAll<HTMLDivElement>('.info-card')

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('slide-from-top')
                            }, index * 500)
                        })
                        observer.unobserve(wrapper)
                    }
                })
            },
            { threshold: 0.5 }
        )

        observer.observe(wrapper)
    }, [])

    return (
        <section className="section contact-main" id='contactForm'>
            <div className="container">
                <div className="contact-form-top">
                    <div className="contact-left">
                        <div className="contact-head-main">
                            <h2 className=''>{contactFormTitle}</h2>
                            <p className='h6 text-grey text-rg'>{contactFormSubtitle}</p>
                        </div>

                        <Image src="/images/contactpage/ContactFormGif.png" alt='ContactForm' width={559} height={367} priority={false} />
                    </div>

                    <FormSubmission />
                </div>

                <div className="contact-info-wrapper" ref={infoWrapperRef}>
                    <div className="info-card info-card-mail site-radius-20">
                        <span className="icon-contact-mail"></span>
                        <div>
                            <h4 className='text-md h5'>Email</h4>
                            <p className='text-rg text-18 text-grey'>{contactEmail}</p>
                        </div>
                    </div>

                    <div className="info-card info-card-call site-radius-20">
                        <span className="icon-contact-call"></span>
                        <div>
                            <h4 className='text-md h5'>Phone Number</h4>
                            <p className='text-rg text-18 text-grey'>{contactPhone}</p>
                        </div>
                    </div>

                    <div className="info-card info-card-location site-radius-20">
                        <span className="icon-contact-location"></span>
                        <div>
                            <h4 className='text-md h5'>Location</h4>
                            <p className='text-rg text-18 text-grey'>{contactLocation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
