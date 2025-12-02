"use client";

import Image from "next/image";
import React from "react";

const SolutionHero = () => {
  return (
    <section className="section hero-home site-hero solution-hero">
      {/* Background Elements */}
      <span className="light-orange-box"></span>

      <Image
        src="/images/homepage/site-hero-blob.svg"
        alt="site-hero-blob"
        width={600}
        height={600}
        draggable={false}
        className="site-hero-blob"
      />

      {/* Foreground Content */}
      <div className="container">
        <div className="sol-hero-text-wrapper">
          <div className="sol-hero-text">
            
            <Image
              src="/images/solutionpage/Solhero.webp"
              alt="sol-hero"
              width={539}
              height={294}
              priority={false}
              className="sol-hero-img"
            />

            <div className="sol-hero-detail">
              <h1 className="text-sb">Smart Solutions for Complex Workflows</h1>

              <p className="h6 text-rg">
                Streamline payments, regulatory compliance, and end-to-end workflow
                automation with a fully integrated platform that delivers speed,
                superior security, and reliable scalability for complex clinical
                operations. Experience seamless management of every transaction and
                process, empowering your team to focus on driving clinical success.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
