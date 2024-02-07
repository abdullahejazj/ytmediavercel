import { normalizeResponse } from "@/utils/normalize-response";

export const getBlogPageContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-page?populate=deep`,
		{ cache: "no-store" }
	);
	const data = await response.json();
	return normalizeResponse(data);
};


export const getBlogs = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?sort=createdAt:desc&populate=*`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};

export const getBlogBySlug = async (slug:string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};