import HeroHome from "@/components/Homepage/HeroHome";
import HomeBlogHighlight from "@/components/Homepage/HomeBlogHighlight";
import CoreCapabilities from "@/components/Homepage/HomeCoreCapabilities";
import HomeDhatuPayWorks from "@/components/Homepage/HomeDhatuPayWorks";
import HomeFAQs from "@/components/Homepage/HomeFAQs";
import HomePayIntro from "@/components/Homepage/HomePayIntro";
import Pricing from "@/components/Homepage/HomePricing";
import SeamlessPayments from "@/components/Homepage/HomeSeamlessPayments";
import HomeTestimonials from "@/components/Homepage/HomeTestimonials";
import HomeTrust from "@/components/Homepage/HomeTrust";
import { fetchGraphQL } from "@/lib/graphql";

type HomepageData = {
    page: {
        homepage: {
			heroTitle: string;
			heroSubtitle: string;
			heroCta1?: { url: string; title: string } | null;
			heroCta2?: { url: string; title: string } | null;

			redefiningClinicalTrialsTitle: string;
			redefiningClinicalTrialsPara1: string;
			redefiningClinicalTrialsPara2: string;

			howDhatupayWorksTitle: string;
			howDhatupayWorksSubtitle: string;
			dhatupayWorksSlider : {
				homeWorksCard1Title: string;
				homeWorksCard2Title: string;
				homeWorksCard3Title: string;
				homeWorksCard4Title: string;
				homeWorksCard1Subtitle: string;
				homeWorksCard2Subtitle: string;
				homeWorksCard3Subtitle: string;
				homeWorksCard4Subtitle: string;
			}

			seamlessTitle: string;
			seamlessSubtitle: string;

			seamlessPaymentsAdvantages: {
				paymentsAdvantages1Title: string;
				paymentsAdvantages2Title: string;
				paymentsAdvantages3Title: string;
				paymentsAdvantages4Title: string;

				paymentsAdvantages1Subtitle: string;
				paymentsAdvantages2Subtitle: string;
				paymentsAdvantages3Subtitle: string;
				paymentsAdvantages4Subtitle: string;
			}

			coreCapabilitiesTitle: string;
			coreCapabilitiesSubtitle: string;
			coreCapabilitiesList:{
				capabilitiesList1Title: string;
				capabilitiesList1Subtitle: string;
				capabilitiesList2Title: string;
				capabilitiesList2Subtitle: string;
				capabilitiesList3Title: string;
				capabilitiesList3Subtitle: string;
				capabilitiesList4Title: string;
				capabilitiesList4Subtitle: string;
			}

			pricingTitle: string;
			pricingSubtitle: string;
			planDetails: {
				standardInclude1: string;
				standardInclude2: string;
				standardInclude3: string;
				standardInclude4: string;
				standardInclude5: string;

				enterpriseInclude1: string;
				enterpriseInclude2: string;
				enterpriseInclude3: string;
				enterpriseInclude4: string;
				enterpriseInclude5: string;
			}

			securityTrustTitle: string;
			securityTrustSubtitle: string;
			trustList: {
				integrityTitle: string;
				integritySubtitle: string;
				securityTitle: string;
				securitySubtitle: string;
				complianceTitle: string;
				complianceSubtitle: string;
			}

			testimonialsTitle: string;
			testimonialList: {
				testimonials1Content: string;
				testimonials1Author: string;
				testimonials1Designation: string;
				testimonials2Content: string;
				testimonials2Author: string;
				testimonials2Designation: string;
				testimonials3Content: string;
				testimonials3Author: string;
				testimonials3Designation: string;
			}

			faqTitle: string;
			faqSubtitle: string;
			question1: string;
			answer1: string;
			question2: string;
			answer2: string;
			question3: string;
			answer3: string;
			question4: string;
			answer4: string;
			question5: string;
			answer5: string;
		};
    };
}

export default async function HomePage() {

	const Home = await fetchGraphQL<HomepageData>(`
            query {
            page(id: "/", idType: URI) {
                homepage {
					heroTitle
					heroSubtitle
                    heroCta1 { url  title }
                    heroCta2 { url  title }

					redefiningClinicalTrialsTitle
					redefiningClinicalTrialsPara1
					redefiningClinicalTrialsPara2

					
					howDhatupayWorksTitle
					howDhatupayWorksSubtitle

					dhatupayWorksSlider {
						homeWorksCard1Title
						homeWorksCard2Title
						homeWorksCard3Title
						homeWorksCard4Title
						homeWorksCard1Subtitle
						homeWorksCard2Subtitle
						homeWorksCard3Subtitle
						homeWorksCard4Subtitle
					}

					seamlessTitle
					seamlessSubtitle

					seamlessPaymentsAdvantages {
						paymentsAdvantages1Title
						paymentsAdvantages2Title
						paymentsAdvantages3Title
						paymentsAdvantages4Title

						paymentsAdvantages1Subtitle
						paymentsAdvantages2Subtitle
						paymentsAdvantages3Subtitle
						paymentsAdvantages4Subtitle
					}

					coreCapabilitiesTitle
					coreCapabilitiesSubtitle

					coreCapabilitiesList {
						capabilitiesList1Title
						capabilitiesList1Subtitle
						capabilitiesList2Title
						capabilitiesList2Subtitle
						capabilitiesList3Title
						capabilitiesList3Subtitle
						capabilitiesList4Title
						capabilitiesList4Subtitle
					}

					pricingTitle
					pricingSubtitle
					planDetails {
						standardInclude1
						standardInclude2
						standardInclude3
						standardInclude4
						standardInclude5

						enterpriseInclude1
						enterpriseInclude2
						enterpriseInclude3
						enterpriseInclude4
						enterpriseInclude5
					}

					securityTrustTitle
					securityTrustSubtitle

					trustList {
						integrityTitle
						integritySubtitle
						securityTitle
						securitySubtitle
						complianceTitle
						complianceSubtitle
					}
					
					testimonialsTitle
					testimonialList {
						testimonials1Content
						testimonials1Author
						testimonials1Designation
						testimonials2Content
						testimonials2Author
						testimonials2Designation
						testimonials3Content
						testimonials3Author
						testimonials3Designation
					}

					faqTitle
					faqSubtitle
					question1
					answer1
					question2
					answer2
					question3
					answer3
					question4
					answer4	
					question5
					answer5

				}
            }
        }
	`);

	const HomeFetch = Home.page.homepage;

	return (
		<>
			<main>
				<HeroHome heroTitle={HomeFetch.heroTitle} heroSubtitle={HomeFetch.heroSubtitle} heroCta1={HomeFetch.heroCta1} heroCta2={HomeFetch.heroCta2} />

				<HomePayIntro redefiningClinicalTrialsTitle={HomeFetch.redefiningClinicalTrialsTitle} redefiningClinicalTrialsPara1={HomeFetch.redefiningClinicalTrialsPara1} redefiningClinicalTrialsPara2={HomeFetch.redefiningClinicalTrialsPara2} />

				<HomeDhatuPayWorks howDhatupayWorksTitle={HomeFetch.howDhatupayWorksTitle} howDhatupayWorksSubtitle={HomeFetch.howDhatupayWorksSubtitle} dhatupayWorksSlider={HomeFetch.dhatupayWorksSlider}/>

				<SeamlessPayments seamlessTitle={HomeFetch.seamlessTitle} seamlessSubtitle={HomeFetch.seamlessSubtitle} seamlessPaymentsAdvantages={HomeFetch.seamlessPaymentsAdvantages} />

				<CoreCapabilities coreCapabilitiesTitle={HomeFetch.coreCapabilitiesTitle} coreCapabilitiesSubtitle={HomeFetch.coreCapabilitiesSubtitle} coreCapabilitiesList={HomeFetch.coreCapabilitiesList} />

				<Pricing pricingTitle={HomeFetch.pricingTitle} pricingSubtitle={HomeFetch.pricingSubtitle} planDetails={HomeFetch.planDetails} />

				<HomeTrust securityTrustTitle={HomeFetch.securityTrustTitle} securityTrustSubtitle={HomeFetch.securityTrustSubtitle} trustList={HomeFetch.trustList} />

				<HomeBlogHighlight />

				<HomeTestimonials testimonialsTitle={HomeFetch.testimonialsTitle} testimonialList={HomeFetch.testimonialList} />

				<HomeFAQs faqTitle={HomeFetch.faqTitle} faqSubtitle={HomeFetch.faqSubtitle} question1={HomeFetch.question1} answer1={HomeFetch.answer1} question2={HomeFetch.question2} answer2={HomeFetch.answer2} question3={HomeFetch.question3} answer3={HomeFetch.answer3} question4={HomeFetch.question4} answer4={HomeFetch.answer4} question5={HomeFetch.question5} answer5={HomeFetch.answer5} />
			</main>
		</>
	);
}