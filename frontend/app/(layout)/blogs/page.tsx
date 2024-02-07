import BlogsSection from "@/components/blogs/BlogsSection";
import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Pagination from "@/components/shared/Pagination";
import { getBlogPageContent, getBlogs } from "@/services/getBlogPageContent";
import { paginateBlogPosts } from "@/utils/blogs";

type TBlogPageProps = {
	searchParams: {
		page: string;
	};
};

// SEO Metadata
export async function generateMetadata() {
	const res = await getBlogPageContent();

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

export default async function BlogsPage({ searchParams }: TBlogPageProps) {
	const [blogPageContent, allBlogs] = await Promise.all([
		getBlogPageContent(),
		getBlogs(),
	]);

	const pageNumber = parseInt(searchParams?.page) || 1;
	const { totalPage, blogPosts } = paginateBlogPosts(pageNumber, allBlogs, 6);

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title={blogPageContent?.breadcrumb?.label || ""}
				path={blogPageContent?.breadcrumb?.links || []}
			/>

			<section className="pt-20 pb-10 pt-lg-30 pb-lg-15">
				<div className="container">
					<BlogsSection blogs={blogPosts} />
					<Pagination
						path="/blogs?page="
						currentPage={pageNumber}
						totalPage={totalPage}
					/>
				</div>
			</section>

			<CtaHome />
		</main>
	);
}
