import FutureOfPayments from "@/components/Aboutpage/AboutFutureOfPayments";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutLifeCycle from "@/components/Aboutpage/AboutLifeCycle";
import AboutNextGenAccords from "@/components/Aboutpage/AboutNextGenAccords";

export default function About() {
    return (
        <main>
            <AboutHero />

            <AboutLifeCycle />

            <FutureOfPayments />

            <AboutNextGenAccords />
        </main>
    );
}