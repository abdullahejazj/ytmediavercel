import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { getUseCaseBySlug } from "@/services/getUseCasesContent";
import Markdown from "markdown-to-jsx";

type TBlogDetailsPageProps = {
	params: {
		slug: string;
	};
};

type TGenerateMetadataProps = {
	params: {
		slug: string;
	};
};

// SEO Metadata
export async function generateMetadata({ params }: TBlogDetailsPageProps) {
	const { slug } = params;

	const blogPost = await getUseCaseBySlug(slug);
	const { title, icon, content } = blogPost?.[0];

	return {
		title,
		description: content,
		keywords: [title],
		openGraph: {
			title,
			description: title,
			siteName: "GenAI",
			images: [icon?.url],
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

export default async function UsecaseDetails({
	params,
}: TBlogDetailsPageProps) {
	const { slug } = params;
	const useCase = await getUseCaseBySlug(slug);
	const { title, content } = useCase?.[0];

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title={title}
				path={[
					{
						title: "Home",
						link: "/",
					},
					{
						title: "Use cases",
						link: "/use-cases",
					},
					{
						title: title,
					},
				]}
			/>

			<section className="pt-10 pt-lg-15">
				<div className="container">
					<NewsletterSection />
					<hr className="border-top border-dark-blue opacity-100 my-18" />
					<div className="row justify-center">
						<div className="col-lg-8">
							<Markdown
								options={{
									wrapper: "article",
									overrides: {
										img: {
											props: {
												className: "img-fluid rounded",
											},
										},
									},
								}}
							>
								{content}
							</Markdown>
						</div>
					</div>
				</div>
			</section>

			<ReviewsSection />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
