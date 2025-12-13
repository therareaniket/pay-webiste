"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Image from "next/image";

type NextGenProps = {
    nextGenIntelligenceTitle: string;
    nextGenIntelligenceSubtitle: string;
    agentPayDetails: string;
    policyEngineDetails: string;
    shadowModeDetails: string;
}

export default function AboutNextGenAccords( {nextGenIntelligenceTitle, nextGenIntelligenceSubtitle, agentPayDetails, policyEngineDetails, shadowModeDetails}: NextGenProps) {
    return (
        <>
            <section className="next-gen-accords">
                <div className="container">
                    <div className="next-gen-headings">
                        <h2>{nextGenIntelligenceTitle}</h2>

                        <p className="h6 text-rg">{nextGenIntelligenceSubtitle}</p>
                    </div>

                    <div className="accordian-wrapper">
                        <div className="accordian-list">
                            <Accordion type="single" defaultValue="item-1" collapsible>
                                <AccordionItem value="item-1" className="next-gen-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg next-gen-trigger">Agent Pay</AccordionTrigger>
                                    <AccordionContent className="text-20 text-rg next-gen-content">{agentPayDetails}</AccordionContent>
                                </AccordionItem>
                                
                                <AccordionItem value="item-2" className="next-gen-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg next-gen-trigger">Policy Engine</AccordionTrigger>
                                    <AccordionContent className="text-20 text-rg next-gen-content">{policyEngineDetails}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="next-gen-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg next-gen-trigger">Shadow Mode</AccordionTrigger>
                                    <AccordionContent className="text-20 text-rg next-gen-content">{shadowModeDetails}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <Image className="next-gen-gif" src='/images/aboutpage/about-next-gen-ai.gif' alt="" width={605} height={380} priority={false}></Image>
                    </div>
                </div>
            </section>
        </>
    );
}