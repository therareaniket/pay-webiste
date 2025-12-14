"use client";

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

type SolutionHeroProps = {
    solutionHeroTitle: string;
    solutionHeroSubtitle: string;
}

const SolutionHeroAnimate =  { 
    ltrInitial: { x: -100, opacity: 0 },
    ltrAnimate: { x: 0, opacity: 1, transition: { duration: 1, delay: 2 } },

    ttbText: {  y: -50, opacity: 0 },
    ttbTextAnimate: { y: 0, opacity: 1, transition: { duration: 1, } },
    
    ttbTextDelayed: {  y: -50, opacity: 0 },
    ttbTextAnimateDelayed: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
}


const SolutionHero = ( { solutionHeroTitle, solutionHeroSubtitle }: SolutionHeroProps ) => {
  	return (
			<section className="section sub-site-hero solutions-hero-section">
				<span className="light-orange-box"></span>

		  		<Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

		  		<div className="container">
			  		<div className="hero-details-wrapper">
						<motion.div className="" variants={SolutionHeroAnimate} initial="ltrInitial" animate="ltrAnimate" viewport={{ once: true }}>
				  			<Image src="/images/solutionpage/Solhero.webp" alt="about-hero" width={500} height={294} priority={true} className="solution-hero-img"></Image>
						</motion.div>

				  		<div className="subpage-hero-details">
					  		<motion.h1 className="text-sb" variants={SolutionHeroAnimate} initial="ttbText" animate="ttbTextAnimate" viewport={{ once: true }}>{solutionHeroTitle}</motion.h1>
					  		{/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}

					  		<motion.p className="h6 text-rg" variants={SolutionHeroAnimate} initial="ttbTextDelayed" animate="ttbTextAnimateDelayed" viewport={{ once: true }}>{solutionHeroSubtitle}</motion.p>
				  		</div>
			  		</div>
		  		</div>
	  		</section>
      	);};

export default SolutionHero;



    // <section className="section hero-home site-hero solution-hero">
    //   {/* Background Elements */}
    //   <span className="light-orange-box"></span>

    //   <Image
    //     src="/images/homepage/site-hero-blob.svg"
    //     alt="site-hero-blob"
    //     width={600}
    //     height={600}
    //     draggable={false}
    //     className="site-hero-blob"
    //   />

    //   {/* Foreground Content */}
    //   <div className="container">
    //     <div className="sol-hero-text-wrapper">
    //       <div className="sol-hero-text">
            
    //         <Image
    //           src="/images/solutionpage/Solhero.webp"
    //           alt="sol-hero"
    //           width={539}
    //           height={294}
    //           priority={false}
    //           className="sol-hero-img"
    //         />

    //         <div className="sol-hero-detail">
    //           <h1 className="text-sb">Smart Solutions for Complex Workflows</h1>

    //           <p className="h6 text-rg">
    //             Streamline payments, regulatory compliance, and end-to-end workflow
    //             automation with a fully integrated platform that delivers speed,
    //             superior security, and reliable scalability for complex clinical
    //             operations. Experience seamless management of every transaction and
    //             process, empowering your team to focus on driving clinical success.
    //           </p>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>

