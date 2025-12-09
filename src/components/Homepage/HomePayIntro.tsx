"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePayIntro() {
    const [count, setCount] = useState<number>(0);
    const [animateBoxes, setAnimateBoxes] = useState(false);

    const donutRef = useRef<HTMLDivElement | null>(null);
    const leftSpikeRef = useRef<SVGPathElement | null>(null);
    const rightSpikeRef = useRef<SVGPathElement | null>(null);

    const target = 95; // final number
    const duration = 2000; // animation duration in ms

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        let animationStarted = false;

        const animateNumber = () => {
            let start: number | null = null;

            const step = (timestamp: number) => {
                if (start === null) start = timestamp;
                const progress = timestamp - start;
                const currentCount = Math.min(Math.floor((progress / duration) * target), target);
                setCount(currentCount);
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        const animateSVG = (path: SVGPathElement | null) => {
            if (!path) return;
            const length = path.getTotalLength();
            path.style.transition = "none"; // reset previous transition
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            // trigger reflow to restart transition
            path.getBoundingClientRect();
            path.style.transition = "stroke-dashoffset 2s linear";
            path.style.strokeDashoffset = "0";
        };

        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationStarted) {
                    animationStarted = true;

                    // Animate number
                    animateNumber();

                    // Animate boxes
                    setAnimateBoxes(true);

                    // Animate SVG paths
                    animateSVG(leftSpikeRef.current);
                    animateSVG(rightSpikeRef.current);

                    // Disconnect if you want animation only once
                    observer?.disconnect();
                }
            });
        };

        observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
        if (donutRef.current) observer.observe(donutRef.current);

        return () => observer?.disconnect();
    }, []);

    const fasterStyle = {
        transform: animateBoxes ? "translateX(0)" : "translateX(-200px)",
        opacity: animateBoxes ? 1 : 0,
        transition: "transform 1.5s ease-out, opacity 1s ease-out",
    };

    const payoutStyle = {
        transform: animateBoxes ? "translateX(0)" : "translateX(200px)",
        opacity: animateBoxes ? 1 : 0,
        transition: "transform 1.5s ease-out, opacity 1s ease-out",
    };

    return (
        <section className="section redefine-payment">
            <div className="container">
                <div className="redefine-payment-wrapper">
                    <div className="redefine-pymt-details">
                        <h2>Redefining Clinical Trials Payments</h2>
                        <p className="h6 text-rg">
                            DhatuPay delivers secure, compliant clinical trials payments tailored for Sponsors, CROs, Sites, and Participants. This platform automates complex workflows for fast, transparent global payouts, eliminating delays and compliance risks.
                        </p>
                        <p className="h6 text-rg">
                            Bridge all stakeholders with reliable, real-time payment solutions that boost trial efficiency worldwide.
                        </p>
                    </div>

                    <div className="redefine-pymt-growth">
                        <div className="err-redc-center" style={{ position: "relative" }}>
                            <div className="donut-circle hm-donut-circle" ref={donutRef}>
                                <div className="donut-inner-circle hm-donut-inner-circle">
                                    <div className="inner-circle-text">
                                        <span className="h2">{count}%</span>
                                        <span className="text-md text-18"> Reduction in Payment Errors</span>
                                    </div>
                                </div>
                            </div>

                            <svg
                                className="reduction-spike-left"
                                width="217"
                                height="106"
                                viewBox="0 0 217 106"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    ref={leftSpikeRef}
                                    d="M0.9375 105.608L38.2963 4.27271C39.5427 0.891818 43.8478 -0.100555 46.4485 2.39354L89.4398 43.6234C91.4427 45.5441 94.6266 45.4664 96.5334 43.4502L134.177 3.64662C136.872 0.796746 141.649 2.0185 142.646 5.81238L159.361 69.4727C160.182 72.6006 163.712 74.1378 166.562 72.6085L215.938 46.1084"
                                    stroke="#053EFF"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>

                            <svg
                                className="reduction-spike-right"
                                width="144"
                                height="218"
                                viewBox="0 0 144 218"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    ref={rightSpikeRef}
                                    d="M0.979492 217L22.5489 113.259C23.4269 109.036 28.8813 107.832 31.4558 111.293L52.4321 139.488C54.948 142.869 60.2627 141.812 61.2922 137.724L92.8597 12.3955C93.9712 7.9825 99.921 7.22815 102.099 11.2241L142.979 86.2391"
                                    stroke="#053EFF"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>

                            <div className="faster-cycle site-radius-20" style={fasterStyle}>
                                <p className="h5" style={{ marginBottom: 0 }}>30-50%</p>
                                <p>Faster Cycle Times</p>
                            </div>

                            <div className="payout-success site-radius-20" style={payoutStyle}>
                                <p className="h5" style={{ marginBottom: 0 }}>99%+</p>
                                <p>Payout Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
