import { normalizeResponse } from "@/utils/normalize-response";

export const getPricingPlanContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/pricing-plan?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};
