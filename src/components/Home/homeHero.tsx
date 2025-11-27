import Image from "next/image";
import Link from "next/link";

export default function homeHero() {
  return(
    <>
      <div className="hm-hero-main">
        <div className="conatiner">
          <div className="hm-hero-wrapper">
            <div className="hm-hero-images">
              <Image className="hero-home-text-spin" src="/images/homePage/hero-home-text-spin.webp" alt="text-spin-img" width={188} height={188} priority={false}></Image>
              <Image className="home-hero-stripe" src="/images/homePage/home-hero-stripe.webp" alt="hero=-stripe-img" width={1971} height={60} priority={false}></Image>
              <Image className="home-hero-hand" src="/images/homePage/home-hero-hand.webp" alt="hero-hand" width={885} height={929} priority={false}></Image>
              <Image className="home-hero-hand-1" src="/images/homePage/home-hero-hand-1.webp" alt="hero-card-1" width={347} height={176} priority={false}></Image>
              <Image className="home-hero-hand-2" src="/images/homePage/home-hero-hand-2.webp" alt="hero-card-2" width={265} height={140} priority={false}></Image>
              <Image className="home-hero-hand-3" src="/images/homePage/home-hero-hand-3.webp" alt="hero-card-3" width={265} height={104} priority={false}></Image>
            </div>

            <div className="home-hero-text-wrapper">
              <h1 className="hm-hero-head text-md">Simplifying Global Clinical Trial Payments</h1>

              <p className="hm-hero-desc text-rg h6">Secure, compliant, and fast payouts for Sponsors, CROs, Sites, and participants , streamlining every step of clinical trial payments with transparency and efficiency.</p>
              
              <div className="hm-hero-btns">
                <Link href="/" className="">Book a Demo</Link>

                <Link href="/" className="">Explore Product</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}