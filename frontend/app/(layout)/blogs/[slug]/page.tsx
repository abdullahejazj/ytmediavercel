import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { getBlogBySlug } from "@/services/getBlogPageContent";
import { calculateReadTime } from "@/utils/calculate-read-time";
import { getFormattedDate } from "@/utils/helpers";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

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

	const blogPost = await getBlogBySlug(slug);
	const { title, category, createdAt, thumbnail, content, updatedBy } =
		blogPost?.[0];

	return {
		title,
		description: title,
		keywords: [category?.name],
		openGraph: {
			title,
			description: title,
			siteName: "GenAI",
			images: [thumbnail?.url],
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

export default async function BlogDetailsPage({
	params,
}: TBlogDetailsPageProps) {
	const { slug } = params;

	const blogPost = await getBlogBySlug(slug);

	const { title, category, createdAt, thumbnail, content, updatedBy } =
		blogPost?.[0];

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Post Details"
				path={[
					{
						title: "Home",
						link: "/",
					},
					{
						title: "Blog Posts",
						link: "/blogs",
					},
					{
						title,
					},
				]}
			/>

			<section className="pt-20 pb-10 pt-lg-30 pb-lg-15">
				<div className="container">
					<div className="row justify-center mb-10">
						<div className="col-lg-8">
							<h2 className="fw-medium mb-0 text-white">{title}</h2>
						</div>
					</div>
					<div className="ratio ratio-21x9 rounded-4 overflow-hidden">
						<Image
							src={thumbnail?.url || ""}
							alt={title}
							fill
							className="img-fluid post-thumbnail w-full h-full object-cover"
						/>
					</div>
					<div className="row justify-center mt-8">
						<div className="col-lg-8">
							<div className="">
								<div className="d-flex flex-wrap justify-between align-center mb-6 gap-6">
									<div className="d-flex flex-wrap align-center gap-4">
										<Image
											src={thumbnail?.url || "url"}
											alt={updatedBy?.firstname}
											height={32}
											width={32}
											className="w-8 h-8 object-cover rounded-circle flex-shrink-0"
										/>
										<p className="fw-medium mb-0 post-author">
											{updatedBy?.firstname}
										</p>
									</div>

									<ul className="list-unstyled d-flex flex-wrap align-center fs-sm meta-list mb-0">
										<li>{category?.name}</li>
										<li>{getFormattedDate(createdAt)}</li>
										<li>{calculateReadTime(content)}</li>
									</ul>
								</div>
								<Markdown
									options={{
										wrapper: "article",
										overrides: {
											img: {
												props: {
													className: "img-fluid rounded-4",
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
				</div>
			</section>

			<CtaHome />
		</main>
	);
}
