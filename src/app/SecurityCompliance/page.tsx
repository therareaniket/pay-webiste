import SecurityAdvancedGovernance from "@/components/Securitycompliancepage/SecurityAdvancedGovernance";
import SecurityAdvancedProtection from "@/components/Securitycompliancepage/SecurityAdvancedProtection";
import SecurityHero from "@/components/Securitycompliancepage/SecurityHero";
import SecurityRegulatory from "@/components/Securitycompliancepage/SecurityRegulatory";
import { fetchGraphQL } from "@/lib/graphql";

type SecuritypageData = {
    page: {
        securitypage: {
            securityHeroTitle: string;
            securityHeroSubtitle: string;

            complianceIntroTitle: string;
            complianceIntroSubtitle: string;
            securityArchitectureTitle: string;
            securityArchitectureSubtitle1: string;
            securityArchitectureSubtitle2: string;

            advancedGovernanceTitle: string;
            advancedGovernanceSubtitle: string;

            globalExcellenceTitle: string;
            globalExcellenceSubtitle: string;
            esignaturesDetails: string;
            auditTrailsDetails: string;
            jurisdictionPacksDetails: string;
        };
    };
};

export default async function SecurityCompliance() {

    const Security = await fetchGraphQL<SecuritypageData>(`
        query {
            page(id: "/securityandcompliance", idType: URI) {
                securitypage {
                    securityHeroTitle
                    securityHeroSubtitle

                    complianceIntroTitle
                    complianceIntroSubtitle
                    securityArchitectureTitle
                    securityArchitectureSubtitle1
                    securityArchitectureSubtitle2

                    advancedGovernanceTitle
                    advancedGovernanceSubtitle

                    globalExcellenceTitle
                    globalExcellenceSubtitle
                    esignaturesDetails
                    auditTrailsDetails
                    jurisdictionPacksDetails
                }
            }
        }`);
    
        const SecurityFetch = Security.page.securitypage;

    return (
        <>
            <SecurityHero securityHeroTitle={SecurityFetch.securityHeroTitle} securityHeroSubtitle={SecurityFetch.securityHeroSubtitle} />

            <SecurityAdvancedProtection complianceIntroTitle={SecurityFetch.complianceIntroTitle} complianceIntroSubtitle={SecurityFetch.complianceIntroSubtitle} securityArchitectureTitle={SecurityFetch.securityArchitectureTitle} securityArchitectureSubtitle1={SecurityFetch.securityArchitectureSubtitle1} securityArchitectureSubtitle2={SecurityFetch.securityArchitectureSubtitle2} />

            <SecurityAdvancedGovernance advancedGovernanceTitle={SecurityFetch.advancedGovernanceTitle} advancedGovernanceSubtitle={SecurityFetch.advancedGovernanceSubtitle} />

            <SecurityRegulatory globalExcellenceTitle={SecurityFetch.globalExcellenceTitle} globalExcellenceSubtitle={SecurityFetch.globalExcellenceSubtitle} esignaturesDetails={SecurityFetch.esignaturesDetails} auditTrailsDetails={SecurityFetch.auditTrailsDetails} jurisdictionPacksDetails={SecurityFetch.jurisdictionPacksDetails} />
        </>
    );
}