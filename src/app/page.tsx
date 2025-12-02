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


export default function HomePage() {
	return (
		<>
			<main>
				<HeroHome />

				<HomePayIntro />

				<HomeDhatuPayWorks />

				<SeamlessPayments />

				<CoreCapabilities />

				<Pricing />

				<HomeTrust />

				<HomeBlogHighlight />

				<HomeTestimonials />

				<HomeFAQs />
			</main>
		</>
	);
}
