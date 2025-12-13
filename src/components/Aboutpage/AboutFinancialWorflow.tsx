"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type FinancialWorkflowProps = {
    coreWorkflowsTitle: string;
    coreWorkflowsSubtitle: string;
    reconciliationDetails: string;
    analyticsDetails: string;
    queueHealthDetails: string;
    riskMonitoringDetails: string;
};


export default function FinancialWorkflow( {coreWorkflowsTitle, coreWorkflowsSubtitle, reconciliationDetails, analyticsDetails, queueHealthDetails, riskMonitoringDetails}: FinancialWorkflowProps ) {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const leftCards = section.querySelectorAll<HTMLElement>(".wf-list-left .wf-list-item");
        const rightCards = section.querySelectorAll<HTMLElement>(".wf-list-right .wf-list-item");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-in");
                    }
                });
            },
            { threshold: 0.2 }
        );

        leftCards.forEach((card) => observer.observe(card));
        rightCards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section financial-workflow" ref={sectionRef}>
            <div className="container">
                <div className="financial-headings">
                    <h2>{coreWorkflowsTitle}</h2>
                    <p className="h6 text-rg">{coreWorkflowsSubtitle}</p>
                </div>

                <div className="workflow-lists">
                    {/* Left Cards */}
                    <div className="workflow-list wf-list-left">
                        <div className="wf-list-item site-radius-20 bg-[#D1EAD3]">
                            <div className="wf-list-icon site-radius-10 bg-[#87C88E]">
                                <span className="icon-reconciliation"></span>
                            </div>
                            <div className="wf-list-details">
                                <h3 className="h5 text-md">Reconciliation</h3>
                                <p className="text-18">{reconciliationDetails}</p>
                            </div>

                            <Image src="/images/aboutpage/top-left-arrow.svg" alt="top-left-arrow" width={150} height={62} className="arrow-top-left"></Image>
                        </div>

                        <div className="wf-list-item site-radius-20 bg-[#FEE4D2]">
                            <div className="wf-list-icon site-radius-10 bg-[#FBB98A]">
                                <span className="icon-analytics"></span>
                            </div>
                            <div className="wf-list-details">
                                <h3 className="h5 text-md">Analytics</h3>
                                <p className="text-18">{analyticsDetails}</p>
                            </div>

                            <Image src="/images/aboutpage/bottom-left-arrow.svg" alt="bottom-left-arrow" width={150} height={62} className="arrow-bottom-left"></Image>
                        </div>
                    </div>

                    {/* Center Donut */}
                    <div className="donut-circle">
                        <div className="donut-inner-circle">
                            <span className="h2">Pay</span>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="workflow-list wf-list-right">
                        <div className="wf-list-item site-radius-20 bg-[#FFEFCD]">
                            <div className="wf-list-icon site-radius-10 bg-[#FED57E]">
                                <span className="icon-queue-health"></span>
                            </div>
                            <div className="wf-list-details">
                                <h3 className="h5 text-md">Queue Health</h3>
                                <p className="text-18">{queueHealthDetails}</p>
                            </div>

                            <Image src="/images/aboutpage/top-right-arrow.svg" alt="top-right-arrow" width={150} height={62} className="arrow-top-right"></Image>
                        </div>

                        <div className="wf-list-item site-radius-20 bg-[#DDD2FE]">
                            <div className="wf-list-icon site-radius-10 bg-[#A78BFC]">
                                <span className="icon-risk-monitoring"></span>
                            </div>
                            <div className="wf-list-details">
                                <h3 className="h5 text-md">Risk Monitoring</h3>
                                <p className="text-18">{riskMonitoringDetails}</p>
                            </div>

                            <Image src="/images/aboutpage/bottom-right-arrow.svg" alt="bottom-right-arrow" width={150} height={62} className="arrow-bottom-right"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
