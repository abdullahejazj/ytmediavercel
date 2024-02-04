import { normalizeResponse } from "@/utils/normalize-response";

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
