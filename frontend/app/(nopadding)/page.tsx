import BlockFeatureSection from "@/components/blockfeature/BlockFeatureSection";
import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import FeaturesSection from "@/components/feature/FeaturesSection";
import Herosection from "@/components/herosection/Herosection";
import PricingSection from "@/components/pricing/PricingSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import UsecaseSection from "@/components/usecase/UsecaseSection";
import Reveal from "@/components/utils/Reveal";
import { getHomePageContent } from "@/services/getHomePageContent";

// SEO Metadata
export async function generateMetadata() {
	const res = await getHomePageContent();

	const title = res?.seo?.metaTitle;
	const description = res?.seo?.metaDescription;
	const keywords = res?.seo?.keywords;
	const image = res?.seo?.metaImage?.data?.attributes?.url;
	const canonicalURL = res?.seo?.canonicalURL;

	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description,
			siteName: "GenAI",
			images: [image],
		},
		alternates: {
			canonical: canonicalURL,
		},
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		authors: [
			{
				name: "Omar Faruq",
			},
			{
				name: "Omar Faruq",
				url: "https://github.com/0xNaim",
				email: "naimislam3545@gmail.com",
			},
		],
	};
}

export default async function Home() {
	const homeContent = await getHomePageContent();

	// console.log("Data: ", homeContent?.use_cases);

	return (
		<main className="flex-grow-1">
			<Herosection heroContent={homeContent?.hero} />

			<FeaturesSection favoriteTools={homeContent?.favorite_tools} />

			<BlockFeatureSection features={homeContent?.features} />

			{/* Use cases section */}
			<section className="bg-striped bg-striped-sm bg-striped-bottom bg-dark-blue-4 py-20 py-lg-30">
				<div className="container">
					<div className="row justify-center mb-18">
						<div className="col-lg-9">
							<div className="text-center">
								<Reveal el="p" className="text-primary-dark" delay={0.05}>
									{homeContent?.use_cases?.title}
								</Reveal>
								<Reveal el="h1" className="text-white mb-0" delay={0.1}>
									{homeContent?.use_cases?.heading}
								</Reveal>
							</div>
						</div>
					</div>
					<div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
						<UsecaseSection useCases={homeContent?.use_cases?.cases} />
					</div>
				</div>
			</section>

			<ReviewsSection />

			<PricingSection />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
