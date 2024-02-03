import { normalizeResponse } from "@/utils/normalize-response";

export const getFavoriteToolsContent = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/favorite-tool?populate=deep`,
		{ cache: "no-store" }
	);

	const data = await response.json();
	return normalizeResponse(data);
};
