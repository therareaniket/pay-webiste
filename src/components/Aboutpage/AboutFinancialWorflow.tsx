"use client"

export default function FinancialWorkflow() {
    return (
        <>
            <section className="section financial-workflow">
                <div className="container">
                    <div className="financial-headings">
                        <h2>Operational Excellence: Optimizing Core Workflows</h2>

                        <p className="h6 text-rg">Driving accuracy, resilience, and insights across every critical process</p>
                    </div>

                    <div className="workflow-lists">
                        <div className="workflow-list">
                            <div className="wf-list-item site-radius-20 bg-[#D1EAD3]">
                                <div className="wf-list-icon site-radius-10 bg-[#87C88E]">
                                    <span className="icon-reconciliation"></span>
                                </div>

                                <div className="wf-list-details">
                                    <h3 className="h5 text-md">Reconciliation</h3>

                                    <p className="text-18">Enable precise operations by processing standard bank formats—CAMT.053 and MT940—for seamless matching.</p>
                                </div> 
                            </div>

                            <div className="wf-list-item site-radius-20 bg-[#FEE4D2]">
                                <div className="wf-list-icon site-radius-10 bg-[#FBB98A]">
                                    <span className="icon-analytics"></span>
                                </div>

                                <div className="wf-list-details">
                                    <h3 className="h5 text-md">Analytics</h3>

                                    <p className="text-18">Empower decision-makers with end-to-end visibility through comprehensive operational and financial analytics dashboards.</p>
                                </div> 
                            </div>
                        </div>

                        <div className="donut-circle">
                            <div className="donut-inner-circle">
                                <span className="h2">Pay</span>
                            </div>
                        </div>

                        <div className="workflow-list">
                            <div className="wf-list-item site-radius-20 bg-[#FFEFCD]">
                                <div className="wf-list-icon site-radius-10 bg-[#FED57E]">
                                    <span className="icon-queue-health"></span>
                                </div>

                                <div className="wf-list-details">
                                    <h3 className="h5 text-md">Queue Health</h3>

                                    <p className="text-18">Monitor operational reliability with real-time SLA timers tracking every request's progress and status.</p>
                                </div> 
                            </div>

                            <div className="wf-list-item site-radius-20 bg-[#DDD2FE]">
                                <div className="wf-list-icon site-radius-10 bg-[#A78BFC]">
                                    <span className="icon-risk-monitoring"></span>
                                </div>

                                <div className="wf-list-details">
                                    <h3 className="h5 text-md">Risk Monitoring</h3>

                                    <p className="text-18">Deploy AI-driven anomaly detection and risk scoring to proactively shield against financial threats and irregularities.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}