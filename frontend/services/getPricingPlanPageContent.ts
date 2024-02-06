import { normalizeResponse } from "@/utils/normalize-response";

export const getPricingPlanPageContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/pricing-plan-page?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};
