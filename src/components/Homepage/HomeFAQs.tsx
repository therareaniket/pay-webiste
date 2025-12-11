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
                                        <AccordionTrigger className="h6 text-rg faq-trigger">What does this platform do?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">Our platform provides end-to-end financial management for clinical trials — from budget tracking, invoice generation, payment validation and reconciliation, to final disbursement to sites, investigators, or participants. It also supports tracking of all transactions, maintaining audit-ready records, and ensuring compliance with regulatory and contractual requirements.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">Who can use the platform?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">Sponsors, CROs, clinical sites (investigators), and study finance teams can use the platform — anyone involved in managing trial payments, invoices, reimbursements, or financial reconciliation.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">Does it support both site payments (for investigators / sites) and participant reimbursements / compensation?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">Yes — the platform supports payments to clinical sites/investigators as well as reimbursements or stipends for participants (travel, visit-based payments, reimbursements), depending on trial design and agreements.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">Can the platform handle multi-site and global trials (different countries, currencies, tax regimes)?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">Yes — for global or multi-site trials, the platform supports multi-currency payments, international invoicing, tax/withholding considerations, and exchange-rate/currency conversion where needed.</AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="faq-item site-radius-10">
                                        <AccordionTrigger className="h6 text-rg faq-trigger">How does the platform ensure financial transparency and audit readiness?</AccordionTrigger>
                                        <AccordionContent className="h6 text-rg faq-content">All payments, invoices, triggers, and approvals are logged with full audit trails — including date/time stamps, user identity (who authorized), amount, and corresponding trial milestone or visit. This makes it easier to produce documentation for audits or regulatory inspections, and to reconcile actual spend vs budget.</AccordionContent>
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