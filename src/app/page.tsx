import HeroHome from "@/components/Homepage/HeroHome";
import CoreCapabilities from "@/components/Homepage/HomeCoreCapabilities";
import HomeDhatuPayWorks from "@/components/Homepage/HomeDhatuPayWorks";
import HomePayIntro from "@/components/Homepage/HomePayIntro";
import Pricing from "@/components/Homepage/HomePricing";
import SeamlessPayments from "@/components/Homepage/HomeSeamlessPayments";
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
			</main>
		</>
	);
}
