import FinancialWorkflow from "@/components/Aboutpage/AboutFinancialWorflow";
import FutureOfPayments from "@/components/Aboutpage/AboutFutureOfPayments";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutIntegration from "@/components/Aboutpage/AboutIntegration";
import AboutLifeCycle from "@/components/Aboutpage/AboutLifeCycle";
import AboutNextGenAccords from "@/components/Aboutpage/AboutNextGenAccords";
import RegulatoryConfidence from "@/components/Aboutpage/RegulatoryConfidence";
import { fetchGraphQL } from "@/lib/graphql";
import { strict } from "assert";

type AboutpageData = {
    page: {
        aboutpage: {
            aboutHeroTitle: string;
            aboutHeroSubtitle: string;
            introTitle: string;
            introSubtitle: string;

            lifecycleTitle: string;
            lifecycleSubtitle: string;

            clinicalTrialsPaymentsTitle: string;
            clinicalTrialsPaymentsSubtitle: string;

            trialsPaymentsList: {
                challengePoint1: string;
                challengePoint2: string;
                challengePoint3: string;
                challengePoint4: string;

                theSolutionPoint1: string;
                theSolutionPoint2: string;
                theSolutionPoint3: string;
                theSolutionPoint4: string;

                theDifferencePoint1: string;
                theDifferencePoint2: string;
                theDifferencePoint3: string;
                theDifferencePoint4: string;
            };

            regulatoryTitle: string;
            regulatorySubtitle: string;
            regulatorySlide1Details: string;
            regulatorySlide2Details: string;
            regulatorySlide3Details: string;
            regulatorySlide4Details: string;

            nextGenIntelligenceTitle: string;
            nextGenIntelligenceSubtitle: string;
            agentPayDetails: string;
            policyEngineDetails: string;
            shadowModeDetails: string;

            coreWorkflowsTitle: string;
            coreWorkflowsSubtitle: string;
            reconciliationDetails: string;
            analyticsDetails: string;
            queueHealthDetails: string;
            riskMonitoringDetails: string;

            integrationsTitle: string;
            integrationsSubtitle: string;
		};
    };
}

export default async function About() {

    const About = await fetchGraphQL<AboutpageData>(`
                query {
                page(id: "/about", idType: URI) {
                    aboutpage {
                        aboutHeroTitle
                        aboutHeroSubtitle
                        introTitle
                        introSubtitle

                        lifecycleTitle
                        lifecycleSubtitle

                        clinicalTrialsPaymentsTitle
                        clinicalTrialsPaymentsSubtitle

                        trialsPaymentsList {
                            challengePoint1
                            challengePoint2
                            challengePoint3
                            challengePoint4

                            theSolutionPoint1
                            theSolutionPoint2
                            theSolutionPoint3
                            theSolutionPoint4

                            theDifferencePoint1
                            theDifferencePoint2
                            theDifferencePoint3
                            theDifferencePoint4
                        }

                        regulatoryTitle
                        regulatorySubtitle
                        regulatorySlide1Details
                        regulatorySlide2Details
                        regulatorySlide3Details
                        regulatorySlide4Details

                        nextGenIntelligenceTitle
                        nextGenIntelligenceSubtitle
                        agentPayDetails
                        policyEngineDetails
                        shadowModeDetails

                        coreWorkflowsTitle
                        coreWorkflowsSubtitle
                        reconciliationDetails
                        analyticsDetails
                        queueHealthDetails
                        riskMonitoringDetails

                        integrationsTitle
                        integrationsSubtitle
                    }
                }
            }
        `);

    const AboutFetch = About.page.aboutpage;

    return (
        <main>
            <AboutHero  aboutHeroTitle={AboutFetch.aboutHeroTitle} aboutHeroSubtitle={AboutFetch.aboutHeroSubtitle} />

            <AboutLifeCycle introTitle={AboutFetch.introTitle} introSubtitle={AboutFetch.introSubtitle} lifecycleTitle={AboutFetch.lifecycleTitle} lifecycleSubtitle={AboutFetch.lifecycleSubtitle} />

            <FutureOfPayments clinicalTrialsPaymentsTitle={AboutFetch.clinicalTrialsPaymentsTitle} clinicalTrialsPaymentsSubtitle={AboutFetch.clinicalTrialsPaymentsSubtitle} trialsPaymentsList={AboutFetch.trialsPaymentsList} />

            <RegulatoryConfidence regulatoryTitle={AboutFetch.regulatoryTitle} regulatorySubtitle={AboutFetch.regulatorySubtitle} regulatorySlide1Details={AboutFetch.regulatorySlide1Details} regulatorySlide2Details={AboutFetch.regulatorySlide2Details} regulatorySlide3Details={AboutFetch.regulatorySlide3Details} regulatorySlide4Details={AboutFetch.regulatorySlide4Details} />

            <AboutNextGenAccords nextGenIntelligenceTitle={AboutFetch.nextGenIntelligenceTitle} nextGenIntelligenceSubtitle={AboutFetch.nextGenIntelligenceSubtitle} agentPayDetails={AboutFetch.agentPayDetails} policyEngineDetails={AboutFetch.policyEngineDetails} shadowModeDetails={AboutFetch.shadowModeDetails} />

            <FinancialWorkflow coreWorkflowsTitle={AboutFetch.coreWorkflowsTitle} coreWorkflowsSubtitle={AboutFetch.coreWorkflowsSubtitle} reconciliationDetails={AboutFetch.reconciliationDetails} analyticsDetails={AboutFetch.analyticsDetails} queueHealthDetails={AboutFetch.queueHealthDetails} riskMonitoringDetails={AboutFetch.riskMonitoringDetails} />

            <AboutIntegration integrationsTitle={AboutFetch.integrationsTitle} integrationsSubtitle={AboutFetch.integrationsSubtitle} />
        </main>
    );
}