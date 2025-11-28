import HeroHome from "@/components/Homepage/HeroHome";
import HomeDhatuPayWorks from "@/components/Homepage/HomeDhatuPayWorks";
import HomePayIntro from "@/components/Homepage/HomePayIntro";


export default function HomePage() {
	return (
		<>
			<main>
				<HeroHome />

				<HomePayIntro />

				<HomeDhatuPayWorks />
			</main>
		</>
	);
}
