interface NormalizedResponse {
	id?: string;
	[key: string]: any;
}

export const normalizeResponse = (
	res: Record<string, any>
): NormalizedResponse => {
	res = res.data ?? res;

	if (Array.isArray(res)) {
		return res.map(normalizeResponse);
	}

	res = {
		id: res.id,
		...res.attributes,
	};

	for (const key in res) {
		const attr = res[key];

		if (attr !== null && typeof attr === "object" && "data" in attr) {
			res[key] = normalizeResponse(attr);
		}
	}

	return res as NormalizedResponse;
};
