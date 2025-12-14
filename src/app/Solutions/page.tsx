import SolutionHero from "@/components/Solutionpage/SolutionHero";
import SolutionStats from "@/components/Solutionpage/SolutionSats";
import SolutionWorkflow from "@/components/Solutionpage/SolutionWorkflow";
import { fetchGraphQL } from "@/lib/graphql";

type SolutionpageData = {
  page: {
    solutionpage: {
      solutionHeroTitle: string;
      solutionHeroSubtitle: string;

      solutionIntroTitle: string;
      solutionIntroSubtitle: string;
      solutionsIncludes1: string;
      solutionsIncludes2: string;
      solutionsIncludes3: string;
      solutionsIncludes4: string;

      solutionWorkflowTitle: string;
      solutionWorkflowSubtitle: string;
      sitesCroPaymentsDetails: string;
      participantPaymentsDetails: string;
      analyticsOptimizationDetails: string;
      vendorRegulatoryPaymentsDetails: string;
      triggersAccrualsDetails: string;
    };
  };
};

export default async function Solutions() {
    const Solution = await fetchGraphQL<SolutionpageData>(`
        query {
        page(id: "/solution", idType: URI) {
            solutionpage {
				solutionHeroTitle
				solutionHeroSubtitle

				solutionIntroTitle
				solutionIntroSubtitle
				solutionsIncludes1
				solutionsIncludes2
				solutionsIncludes3
				solutionsIncludes4

				solutionWorkflowTitle
				solutionWorkflowSubtitle
				sitesCroPaymentsDetails
				participantPaymentsDetails
				analyticsOptimizationDetails
				vendorRegulatoryPaymentsDetails
				triggersAccrualsDetails
            }
        }
    }`);

	const SolutionFetch = Solution.page.solutionpage;

  return (
    <>
      <SolutionHero solutionHeroTitle={SolutionFetch.solutionHeroTitle} solutionHeroSubtitle={SolutionFetch.solutionHeroSubtitle} />

      <SolutionStats solutionIntroTitle={SolutionFetch.solutionIntroTitle} solutionIntroSubtitle={SolutionFetch.solutionIntroSubtitle} solutionsIncludes1={SolutionFetch.solutionsIncludes1} solutionsIncludes2={SolutionFetch.solutionsIncludes2} solutionsIncludes3={SolutionFetch.solutionsIncludes3} solutionsIncludes4={SolutionFetch.solutionsIncludes4} />

      <SolutionWorkflow solutionWorkflowTitle={SolutionFetch.solutionWorkflowTitle} solutionWorkflowSubtitle={SolutionFetch.solutionWorkflowSubtitle} sitesCroPaymentsDetails={SolutionFetch.sitesCroPaymentsDetails} participantPaymentsDetails={SolutionFetch.participantPaymentsDetails} analyticsOptimizationDetails={SolutionFetch.analyticsOptimizationDetails} vendorRegulatoryPaymentsDetails={SolutionFetch.vendorRegulatoryPaymentsDetails} triggersAccrualsDetails={SolutionFetch.triggersAccrualsDetails} />
    </>
  );
}
