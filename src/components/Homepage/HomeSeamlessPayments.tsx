"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

type SeamlessPaymentsProps = {
    seamlessTitle: string;
    seamlessSubtitle: string;

    seamlessPaymentsAdvantages: {
    	paymentsAdvantages1Title: string;
    	paymentsAdvantages2Title: string;
    	paymentsAdvantages3Title: string;
    	paymentsAdvantages4Title: string;

    	paymentsAdvantages1Subtitle: string;
    	paymentsAdvantages2Subtitle: string;
    	paymentsAdvantages3Subtitle: string;
    	paymentsAdvantages4Subtitle: string;
    }
};

export default function SeamlessPayments( { seamlessTitle, seamlessSubtitle, seamlessPaymentsAdvantages }: SeamlessPaymentsProps) {
  // type the ref as an HTMLSectionElement (or HTMLElement)
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // type the NodeList as NodeListOf<HTMLElement>
    const boxes = sectionEl.querySelectorAll(".pymt-box") as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // add a staggered animationDelay and a class to trigger CSS animation
          boxes.forEach((box, index) => {
            // ensure we set a unit for the delay
            box.style.animationDelay = `${index * 1}s`;
            box.classList.add("pymt-stagger");
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="section seamless-payment">
        <div className="container">
          <div className="smls-pymt-headings">
            <h2>{seamlessTitle}</h2>

            <p className="h6 text-rg">{seamlessSubtitle}</p>
          </div>

          <Image
            src="/images/homepage/seamless-payment-updated.webp"
            alt="seamless-payment"
            width={870}
            height={551}
          />

          <div className="smls-pymt-details">
            <div className="smls-pymt-box-wrapper">
              <div className="pymt-box">
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages1Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages1Subtitle}</p>
              </div>

              <div className="pymt-box">
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages2Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages2Subtitle}</p>
              </div>
            </div>

            <div className="smls-pymt-box-wrapper">
              <div className="pymt-box">
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages3Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages3Subtitle}</p>
              </div>

              <div className="pymt-box">
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages4Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages4Subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
