import HeroHome from "@/components/Homepage/HeroHome";
import HomeDhatuPayWorks from "@/components/Homepage/HomeDhatuPayWorks";
import HomePayIntro from "@/components/Homepage/HomePayIntro";
import SeamlessPayments from "@/components/Homepage/HomeSeamlessPayments";


export default function HomePage() {
	return (
		<>
			<main>
				<HeroHome />

				<HomePayIntro />

				<HomeDhatuPayWorks />

				<SeamlessPayments />
			</main>
		</>
	);
}
