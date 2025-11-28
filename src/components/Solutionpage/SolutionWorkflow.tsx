import Image from "next/image";

export default function SolutionWorkflow() {
    return (
        <>
            <section className="section soln-workflow" >
                <div className="container">
                    <div className="sol-workflow-main">

                        <div className="soln-workflow-text" >
                            <h2 className="h3 text-md"> Solutions That Fit Every Workflow </h2>

                            <p className="h6 text-rg">End-to-end payment and compliance solutions tailored for every clinical trial stakeholder.</p>
                        </div>

                        <div className="soln-workflow-cards">
                            <div className="soln-workflow-card-1">
                                <Image src="/images/solutionpage/soln-workflow-img.webp" alt="soln-workflow-img" width={1060} height={524} priority={false}></Image>

                                <div className="soln-worflow-card">
                                    <div className="site-cro-card stakeholders-cards site-radius-20">
                                        <span className="icon-sites-cros-payments"></span>

                                        <h3 className="h5 text-md">Sites & CRO Payments</h3>

                                        <p className="text-18 text-rg">Automate invoicing and disbursements to ensure timely, accurate payments while reducing manual effort and maintaining tax compliance.</p>
                                    </div>

                                    <div className="parti-payments-card stakeholders-cards site-radius-20">
                                        <span className="icon-participant-payments"></span>

                                        <h3 className="h5 text-md">Participant Payments</h3>

                                        <p className="text-18 text-rg">Provide wallets, instant payouts, and OCR-based receipt capture to simplify expenses, speed reimbursements, and improve participant experience..</p>
                                    </div>
                                </div>
                            </div>

                            <div className="soln-workflow-card-2">
                                <div className="analy-optimization-card stakeholders-cards site-radius-20">
                                    <span className="icon-analytics-optimisation"></span>

                                    <h3 className="h5 text-md">Analytics & Optimization</h3>

                                    <p className="text-18 text-rg">Gain real-time dashboards for spend vs. plan, trend tracking, and actionable insights to improve financial decisions.</p>
                                </div>

                                <div className="vendor-payment-card stakeholders-cards site-radius-20">
                                    <span className="icon-vendor-regualatory-payments"></span>

                                    <h3 className="h5 text-md">Vendor & Regulatory Payments</h3>

                                    <p className="text-18 text-rg">Streamline vendor payouts with automated compliance checks, local regulation support, and secure cross-border transactions.</p>
                                </div>

                                <div className="trigger-accruals-card stakeholders-cards site-radius-20">
                                    <span className="icon-triggers-accruals"></span>

                                    <h3 className="h5 text-md">Triggers & Accruals</h3>

                                    <p className="text-18 text-rg">Automate expense and liability recognition from predefined events for accurate financial reporting and audit-ready compliance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}