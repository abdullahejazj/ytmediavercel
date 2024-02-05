import { normalizeResponse } from "@/utils/normalize-response";

export const getHomePageContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/home-page?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};

export const getBrandLogo = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand-logo?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};
