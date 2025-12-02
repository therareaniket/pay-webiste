import SecurityAdvancedGovernance from "@/components/Securitycompliancepage/SecurityAdvancedGovernance";
import SecurityAdvancedProtection from "@/components/Securitycompliancepage/SecurityAdvancedProtection";
import SecurityHero from "@/components/Securitycompliancepage/SecurityHero";

export default function SecurityCompliance() {
    return (
        <>
            <SecurityHero />

            <SecurityAdvancedProtection/>

            <SecurityAdvancedGovernance />
        </>
    );
}