import FinancialWorkflow from "@/components/Aboutpage/AboutFinancialWorflow";
import FutureOfPayments from "@/components/Aboutpage/AboutFutureOfPayments";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutIntegration from "@/components/Aboutpage/AboutIntegration";
import AboutLifeCycle from "@/components/Aboutpage/AboutLifeCycle";
import AboutNextGenAccords from "@/components/Aboutpage/AboutNextGenAccords";
import RegulatoryConfidence from "@/components/Aboutpage/RegulatoryConfidence";

export default function About() {
    return (
        <main>
            <AboutHero />

            <AboutLifeCycle />

            <FutureOfPayments />

            <RegulatoryConfidence />

            <AboutNextGenAccords />

            <FinancialWorkflow />

            <AboutIntegration />
        </main>
    );
}