import Image from "next/image";

type SolutionWorkflowProps = {
    solutionWorkflowTitle: string;
    solutionWorkflowSubtitle: string;
    sitesCroPaymentsDetails: string;
    participantPaymentsDetails: string;
    analyticsOptimizationDetails: string;
    vendorRegulatoryPaymentsDetails: string;
    triggersAccrualsDetails: string;
}

export default function SolutionWorkflow( {solutionWorkflowTitle, solutionWorkflowSubtitle, sitesCroPaymentsDetails, participantPaymentsDetails, analyticsOptimizationDetails, vendorRegulatoryPaymentsDetails, triggersAccrualsDetails}: SolutionWorkflowProps ) {
    return (
        <>
            <section className="section soln-workflow" >
                <div className="container">
                    <div className="sol-workflow-main">
                        <div className="soln-workflow-text" >
                            <h2 className="h3">{solutionWorkflowTitle}</h2>

                            <p className="h6 text-rg">{solutionWorkflowSubtitle}</p>
                        </div>

                        <div className="soln-workflow-cards">
                            <div className="soln-workflow-card-1">
                                <Image src="/images/solutionpage/soln-workflow-img.webp" alt="soln-workflow-img" width={1060} height={524} priority={false}></Image>

                                <div className="soln-worflow-card">
                                    <div className="site-cro-card stakeholders-cards site-radius-20">
                                        <span className="icon-sites-cros-payments"></span>

                                        <h3 className="h5 text-md">Sites & CRO Payments</h3>

                                        <p className="text-18 text-rg">{sitesCroPaymentsDetails}</p>
                                    </div>

                                    <div className="parti-payments-card stakeholders-cards site-radius-20">
                                        <span className="icon-participant-payments"></span>

                                        <h3 className="h5 text-md">Participant Payments</h3>

                                        <p className="text-18 text-rg">{participantPaymentsDetails}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="soln-workflow-card-2">
                                <div className="analy-optimization-card stakeholders-cards site-radius-20">
                                    <span className="icon-analytics-optimisation"></span>

                                    <h3 className="h5 text-md">Analytics & Optimization</h3>

                                    <p className="text-18 text-rg">{analyticsOptimizationDetails}</p>
                                </div>

                                <div className="vendor-payment-card stakeholders-cards site-radius-20">
                                    <span className="icon-vendor-regualatory-payments"></span>

                                    <h3 className="h5 text-md">Vendor & Regulatory Payments</h3>

                                    <p className="text-18 text-rg">{vendorRegulatoryPaymentsDetails}</p>
                                </div>

                                <div className="trigger-accruals-card stakeholders-cards site-radius-20">
                                    <span className="icon-triggers-accruals"></span>

                                    <h3 className="h5 text-md">Triggers & Accruals</h3>

                                    <p className="text-18 text-rg">{triggersAccrualsDetails}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
