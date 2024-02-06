import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import UseCasesSection from "@/components/usecase/UseCasesSection";
import { getUseCasesPageContent } from "@/services/getUseCasesPageContent";

// SEO Metadata
export async function generateMetadata() {
	const res = await getUseCasesPageContent();

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

export default async function UseCases() {
	const useCasesContent = await getUseCasesPageContent();

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title={useCasesContent?.breadcrumb?.label}
				path={useCasesContent?.breadcrumb?.links || []}
			/>

			<UseCasesSection limit={100} />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
