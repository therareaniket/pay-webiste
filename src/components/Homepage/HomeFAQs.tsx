"use client"

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

type HomeFAQsProps = {
    faqTitle: string;
    faqSubtitle: string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    question3: string;
    answer3: string;
    question4: string;
    answer4: string;
    question5: string;
    answer5: string;
};

export default function HomeFAQs ({faqTitle, faqSubtitle, question1, answer1, question2, answer2, question3, answer3, question4, answer4, question5, answer5}: HomeFAQsProps) {
    return (
        <>
            <section className="section faqs">
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="faq-lists">
                            <div className="faq-headings">
                                <h2>{faqTitle}</h2>

                                <p className="h6 text-rg">{faqSubtitle}</p>
                            </div>

                            <div className="qna-list">
                                <Accordion type="single" defaultValue="item-1" collapsible>
                                    <AccordionItem value="item-1" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">{question1}</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">{answer1}</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">{question2}</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">{answer2}</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">{question3}</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">{answer3}</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">{question4}</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">{answer4}</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">{question5}</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">{answer5}</AccordionContent>
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