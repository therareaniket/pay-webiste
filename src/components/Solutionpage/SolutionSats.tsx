"use client";

import Image from "next/image";
import { useEffect } from "react";

type SolutionStatsProps = {
    solutionIntroTitle: string;
    solutionIntroSubtitle: string;
    solutionsIncludes1: string;
    solutionsIncludes2: string;
    solutionsIncludes3: string;
    solutionsIncludes4: string;
}

export default function SolutionStats( {solutionIntroTitle, solutionIntroSubtitle, solutionsIncludes1, solutionsIncludes2, solutionsIncludes3, solutionsIncludes4} : SolutionStatsProps ) {

    useEffect(() => {

        // ---------------- COUNTERS ANIMATION (already done) ---------------- //
        const counters = document.querySelectorAll<HTMLHeadingElement>(".soln-stats-cards h4");

        const animateCounter = (el: HTMLHeadingElement) => {
            const text = el.innerText;

            if (text.includes("–")) {
                // It's a range like 30–50%
                const [startStr, endStr] = text.split("–");
                const suffix = endStr.replace(/[0-9.\-–]/g, ""); // remove numbers, dot, hyphen, en-dash
                const startTarget = parseFloat(startStr);
                const endTarget = parseFloat(endStr);
                const duration = 2500;
                let startTime: number | null = null;

                const update = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const currentStart = Math.floor(progress * startTarget);
                    const currentEnd = Math.floor(progress * endTarget);
                    el.innerText = `${currentStart}–${currentEnd}${suffix}`;
                    if (progress < 1) requestAnimationFrame(update);
                };

                requestAnimationFrame(update);

            } else {
                // Single number like 60s, 99%+
                const suffix = text.replace(/[0-9.\-–]/g, "");
                const target = parseFloat(text);
                const duration = 2500;
                let startTime: number | null = null;

                const update = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const current = Math.floor(progress * target);
                    el.innerText = `${current}${suffix}`;
                    if (progress < 1) requestAnimationFrame(update);
                };

                requestAnimationFrame(update);
            }
        };



        // ---------------- DESCRIPTION TEXT ANIMATION ---------------- //
        const desc = document.querySelector(".sol-stats-list-desc");

        const descObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        desc?.classList.add("animate");
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (desc) descObserver.observe(desc);

        // ---------------- MAIN SECTION OBSERVER FOR COUNTERS ---------------- //
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        counters.forEach((counter) => animateCounter(counter));
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.4 }
        );

        const section = document.querySelector(".solution-stats-main");
        if (section) observer.observe(section);

    }, []);

    return (
        <>
            <section className="section solution-stats-main">
                <div className="container">
                    <div className="solution-stats-text">
                        <h2 className="h3">{solutionIntroTitle}</h2>

                        <p className="h6 text-rg">{solutionIntroSubtitle}</p>
                    </div>

                    <div className="sol-stats-list">
                        <Image className="soln-stats-img" src="/images/solutionpage/Sol-stats-img.webp" alt="sol-stats-img" width={798} height={357} />

                        <div className="sol-stats-list-desc">
                            <p className="text-md h5">Includes</p>

                            <ul>
                                <li className="sol-tick-desc text-rg text-18">
                                    <span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12} /></span>
                                    {solutionsIncludes1}
                                </li>

                                <li className="sol-tick-desc text-rg text-18">
                                    <span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12} /></span>
                                    {solutionsIncludes2}
                                </li>

                                <li className="sol-tick-desc text-rg text-18">
                                    <span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12} /></span>
                                    {solutionsIncludes3}
                                </li>

                                <li className="sol-tick-desc text-rg text-18">
                                    <span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12} /></span>
                                    {solutionsIncludes4}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="sol-stats-cards">
                        <div className="sol-stats-card-1">
                            <div className="stats-cards-1 soln-stats-cards">
                                <h4 className="h2 text-sb" data-target="50">30–50%</h4>
                                <p className="text-grey h6 text-md">Faster cycle times</p>
                            </div>

                            <div className="stats-cards-2 soln-stats-cards">
                                <h4 className="h2 text-sb" data-target="60">60s</h4>
                                <p className="h6 text-md">Total Payout Initiation</p>
                            </div>
                        </div>

                        <div className="sol-stats-card-2">
                            <div className="stats-cards-3 soln-stats-cards">
                                <h4 className="h2 text-sb" data-target="99">99%+</h4>
                                <p className="h6 text-md">Payout Success</p>
                            </div>

                            <div className="stats-cards-4 soln-stats-cards">
                                <h4 className="h2 text-sb" data-target="180">180+</h4>
                                <p className="text-grey h6 text-md">Integration with CTMS</p>
                            </div>
                        </div>

                        <div className="sol-stats-scroll-wrapper"> <div className="scroll-track"> <div className="stats-cards-1 soln-stats-cards"> <h4 className="h2 text-sb">30–50%</h4> <p className="text-grey h6 text-md">Faster cycle times</p> </div> <div className="stats-cards-2 soln-stats-cards"> <h4 className="h2 text-sb">60s</h4> <p className="h6 text-md">Total Payout Initiation</p> </div> <div className="stats-cards-4 soln-stats-cards"> <h4 className="h2 text-sb">180+</h4> <p className="text-grey h6 text-md">Integration with CTMS</p> </div> <div className="stats-cards-3 soln-stats-cards"> <h4 className="h2 text-sb"> 99%+</h4> <p className="h6 text-md">Payout Success</p> </div> </div> <div className="scroll-track"> <div className="stats-cards-1 soln-stats-cards"> <h4 className="h2 text-sb">30–50%</h4> <p className="text-grey h6 text-md">Faster cycle times</p> </div> <div className="stats-cards-2 soln-stats-cards"> <h4 className="h2 text-sb">60s</h4> <p className="h6 text-md">Total Payout Initiation</p> </div> <div className="stats-cards-4 soln-stats-cards"> <h4 className="h2 text-sb">180+</h4> <p className="text-grey h6 text-md">Integration with CTMS</p> </div> <div className="stats-cards-3 soln-stats-cards"> <h4 className="h2 text-sb"> 99%+</h4> <p className="h6 text-md">Payout Success</p> </div> </div> </div>

                        <div className="sol-stats-card-3">
                            <div className="stats-cards-5">
                                <div className="soln-stats-text-wrap" style={{ textAlign: 'center' }}>
                                    <h4 className="h2 text-sb">(US/EU/IN)</h4>
                                    <p className="h6 text-md">Global compliance</p>
                                </div>
                                <p className="h6 text-rg">
                                    Included in jurisdiction packs to ensure region-specific compliance, tax handling, and also regulatory alignment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}