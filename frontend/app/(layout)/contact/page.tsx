import ContactSection from "@/components/contact/ContactSection";
import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { getContactPageContent } from "@/services/getContactPageContent";
import { Metadata } from "next";

// SEO Metadata
export async function generateMetadata() {
	const res = await getContactPageContent();

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

export default async function ContactPage() {
	const contactPageContent = await getContactPageContent();

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title={contactPageContent?.breadcrumb?.label}
				path={contactPageContent?.breadcrumb?.links || []}
			/>

			<ContactSection contactDetails={contactPageContent?.contact_details} />

			<CtaHome />
		</main>
	);
}
