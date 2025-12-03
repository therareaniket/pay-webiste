import SecurityAdvancedGovernance from "@/components/Securitycompliancepage/SecurityAdvancedGovernance";
import SecurityAdvancedProtection from "@/components/Securitycompliancepage/SecurityAdvancedProtection";
import SecurityHero from "@/components/Securitycompliancepage/SecurityHero";
import SecurityRegulatory from "@/components/Securitycompliancepage/SecurityRegulatory";

export default function SecurityCompliance() {
    return (
        <>
            <SecurityHero />

            <SecurityAdvancedProtection/>

            <SecurityAdvancedGovernance />

            <SecurityRegulatory />
        </>
    );
}