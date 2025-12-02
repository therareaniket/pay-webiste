"use client"

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function HomeFAQs (){
    return (
        <>
            <section className="section faqs">
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="faq-lists">
                            <div className="faq-headings">
                                <h2>Frequently Asked Questions</h2>

                                <p className="h6 text-rg">Your comprehensive guide to understan DhatuPay and unlocking its powerful features for secure, seamless, and efficient payment management.</p>
                            </div>

                            <div className="qna-list">
                                <Accordion type="single" defaultValue="item-1" collapsible>
                                    <AccordionItem value="item-1" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">What is DhatuPay and how does it work?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">It is a secure and reliable payment gateway designed to handle all payment-related transactions for portals.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">Which portals can integrate with DhatuPay?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">With a wide range of portals, including e-commerce platforms, service-based websites, educational portals, subscription services, and more.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">Is DhatuPay secure for online transactions?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">Yes, DhatuPay uses advanced encryption protocols and is PCI-DSS compliant to ensure the highest level of security for all transactions.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">Does DhatuPay support international payments?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">Absolutely, it supports international transactions, allowing businesses to accept payments from customers worldwide.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">What currencies are supported by DhatuPay?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">It supports multiple currencies, including INR and major international currencies such as USD, EUR, GBP, and more.</AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <Image src="/images/homepage/faqs.webp" alt="faqs" width={555} height={555} priority={false} className="site-radius-20"></Image>
                    </div>
                </div>
            </section>
        </>
    );
}