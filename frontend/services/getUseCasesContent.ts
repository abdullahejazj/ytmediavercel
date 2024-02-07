import { normalizeResponse } from "@/utils/normalize-response";

export const getUseCasesPageContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/use-cases-page?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};

export const getUseCasesContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/use-case?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};

export const getUseCases = async (limit: number) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/cases?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}&populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};

export const getUseCaseBySlug = async (slug: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/cases?filters[slug][$eq]=${slug}&populate=*`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};