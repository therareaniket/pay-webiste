"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";


const Footer = () => {

    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname?.toLowerCase() === href.toLowerCase();
    };

    return (
        <footer className='footer-section-main'>
            <div className="container">
                <h1 className='text-md footer-lets-connect'>Let's Connect</h1>
                <div className="glass-footer-cta">
                    <div className="footer-cta-left">
                        <h2 className='h3 text-sb'>Take Your Clinical Trials Global with DhatuPay</h2>

                        <p className='h6 text-rg'>Expand worldwide with multi-currency support and secure international payment solutions.</p>
                    </div>
                    <Link href="/Contact#contactForm" type="button" className='footer-cta-btn'>Get Started</Link>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo-section">
                        <Link href="/"><Image className='footer-logo' src='/images/logo/paylogo.svg' alt='pay-logo' width={176} height={34} priority={false}></Image></Link>

                        <p className='text-md text-16 text-grey footer-logo-para'>Secure Payments. Global Compliance. Trusted by Businesses. Delivering seamless transactions with advanced security.</p>

                        <p className='text-16 text-rg text-grey footer-call-sec'><span className='icon-footerCall'></span> <Link href="tel:+1 512 843 2002">+1 512 843 2002</Link></p>

                        <p className='text-16 text-rg text-grey footer-mail-sec'><span className='icon-footerMail'></span> <Link href="mailto:enquiry@dhatupay.com">enquiry@dhatupay.com</Link></p>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-links quick-links">
                            <p className='text-18 text-md quick-link-heading'>Quick Links</p>
                            <ul>

                                <li className='text-rg text-16 text-grey'>
                                    <Link href="/About" className={`${isActive("/About") ? "active-footer-link" : ""}`}>About</Link>
                                </li>
                                <li className='text-rg text-16 text-grey'>
                                    <Link href="/Solutions" className={`${isActive("/Solutions") ? "active-footer-link" : ""}`}>Solutions</Link>
                                </li>
                                <li className='text-rg text-16 text-grey'>
                                    <Link href="/SecurityCompliance" className={`${isActive("/SecurityCompliance") ? "active-footer-link" : ""}`}>Security & Compliance </Link>
                                </li>
                                <li className='text-rg text-16 text-grey'>
                                    <Link href="/BlogListing" className={`${isActive("/BlogListing") ? "active-footer-link" : ""}`}>Resources</Link>
                                </li>
                                <li className='text-rg text-16 text-grey'>
                                    <Link href="/Contact" className={`${isActive("/Contact") ? "active-footer-link" : ""}`}>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links further-info-links">
                            <p className='text-18 text-md quick-link-heading'>Further Information</p>
                            <ul>

                                <li>
                                    <Link href="/TermsAndCondition" className='text-rg text-16 text-grey'>Terms of Use</Link>
                                </li>
                                <li>
                                    <Link href="/PrivacyPolicy" className='text-rg text-16 text-grey'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links news-letter-tab">
                            <p className='text-18 text-md quick-link-heading'>Newsletter</p>

                            <div className="news-letter-button">
                                <div className="news-letter-tab-btn">
                                    <input className='newsletter-input text-16 text-rg btn-padding' type="email" name="" id="" placeholder='Enter your mail' />

                                    <button type="submit" className='text-rg text-16 foot-news-ltr site-radius-100 btn-padding'>Join Now</button>
                                </div>

                                <div className="footer-social-icons">
                                    <span className='icon-facebook'></span>

                                    <span className='icon-instagram'></span>

                                    <span className='icon-twitter'></span>

                                    <span className='icon-linkedin'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright-main">
                <div className="container">
                    <div className="copy-right-wrapper">
                        <p className='text-14 text-rg text-grey'>Powered by DFOLDS</p>

                        <p className='text-14 text-rg text-grey'>DhatuPay 2025.1.1</p>

                        <p className='text-14 text-rg text-grey'>Copyright ©2025, all rights reserved. </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer