'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';

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
  const sectionRef = useRef<HTMLElement | null>(null);

	const HeroSeamlessAnimate =  { 
    	bttInitial: { y: 50, opacity: 0 },
    	bttAnimate: { y: 0, opacity: 1, transition: { duration: 0.5, } },
	}

  return (
    <>
      <section ref={sectionRef} className="section seamless-payment">
        <div className="container">
          <div className="smls-pymt-headings">
            <h2>{seamlessTitle}</h2>

            <p className="h6 text-rg">{seamlessSubtitle}</p>
          </div>

          <Image
            src="/images/homepage/seamless-payment-mockup-updt.webp"
            alt="seamless-payment"
            width={870}
            height={551}
          />

          <div className="smls-pymt-details">
            <div className="smls-pymt-box-wrapper">
              <motion.div className="pymt-box" variants={HeroSeamlessAnimate} initial="bttInitial" whileInView="bttAnimate" viewport={{ once: true, amount: 1 }}>
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages1Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages1Subtitle}</p>
              </motion.div>

              <motion.div className="pymt-box" variants={HeroSeamlessAnimate} initial="bttInitial" whileInView="bttAnimate" viewport={{ once: true, amount: 1 }}>
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages2Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages2Subtitle}</p>
              </motion.div>
            </div>

            <div className="smls-pymt-box-wrapper" >
              <motion.div className="pymt-box" variants={HeroSeamlessAnimate} initial="bttInitial" whileInView="bttAnimate" viewport={{ once: true, amount: 1 }}>
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages3Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages3Subtitle}</p>
              </motion.div>

              <motion.div className="pymt-box" variants={HeroSeamlessAnimate} initial="bttInitial" whileInView="bttAnimate" viewport={{ once: true, amount: 1 }}>
                <h5>{seamlessPaymentsAdvantages.paymentsAdvantages4Title}</h5>

                <p className="text-18">{seamlessPaymentsAdvantages.paymentsAdvantages4Subtitle}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
