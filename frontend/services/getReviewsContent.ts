import { normalizeResponse } from "@/utils/normalize-response";

export const getReviewsContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/review?populate=reviews.image`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};
