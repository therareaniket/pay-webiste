import Image from "next/image";

export default function SecurityHero() {
    return (
        <>
            <section className="solution-hero hero-home site-hero">
                <span className="light-orange-box"></span>

                <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} className="site-hero-blob"></Image>
                <div className="container">
                    <div className="sol-hero-text-wrapper">
                        <Image src="/images/solutionpage/Solhero.webp" alt="sol-hero" width={539} height={294} priority={false} className="sol-hero-img"></Image>
                        <div className="sol-hero-detail">
                            <h1 className="text-sb">Smart Solutions for Complex Workflows</h1>

                            <p className="h6 text-rg">Streamline payments, compliance, and automation with an integrated platform designed for speed, security, and scalability.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}