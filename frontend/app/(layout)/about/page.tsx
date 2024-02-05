import AboutSection from "@/components/about/AboutSection";
import BrandLogoSection2 from "@/components/brandlogo/BrandLogoSection2";
import CtaHome from "@/components/cta/CtaHome";
import FeaturesSection from "@/components/feature/FeaturesSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TeamSection from "@/components/team/TeamSection";
import { getAboutPageContent } from "@/services/getAboutPageContent";

// SEO Metadata
export async function generateMetadata() {
	const res = await getAboutPageContent();

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

export default async function AboutPage() {
	const aboutContent = await getAboutPageContent();

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title={aboutContent?.breadcrumb?.label || ""}
				path={aboutContent?.breadcrumb?.links || []}
			/>

			<AboutSection aboutContent={aboutContent} />

			<FeaturesSection showVideo />

			<TeamSection team={aboutContent?.team} />

			<ReviewsSection />

			<BrandLogoSection2 brand={aboutContent?.brand} />

			<CtaHome />
		</main>
	);
}
