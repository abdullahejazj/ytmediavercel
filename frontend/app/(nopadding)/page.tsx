import BlockFeatureSection from "@/components/blockfeature/BlockFeatureSection";
import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import FeaturesSection from "@/components/feature/FeaturesSection";
import Herosection from "@/components/herosection/Herosection";
import PricingSection from "@/components/pricing/PricingSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import UseCasesSection from "@/components/usecase/UseCasesSection";
import { getHomePageContent } from "@/services/getHomePageContent";
import { getPricingPlanContent } from "@/services/getPricingPlanContent";

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
	const [homeContent, pricingPlanContent] = await Promise.all([
		getHomePageContent(),
		getPricingPlanContent(),
	]);

	return (
		<main className="flex-grow-1">
			<Herosection heroContent={homeContent?.hero} />

			<FeaturesSection showButton />

			<BlockFeatureSection features={homeContent?.features} />

			<UseCasesSection limit={8} />

			<ReviewsSection />

			<PricingSection pricingPlanContent={pricingPlanContent} />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
