interface Tool {
	id: number;
	title: string;
	description: string;
	icon: Record<string, any>;
	button: null | Record<string, any>;
}

interface Button {
	id: number;
	variant: string;
	label: string;
	href: string;
	target: string;
}

export interface IFavoriteTools {
	favoriteTools: {
		id: number;
		heading: string;
		tools: Tool[];
		button: Button | null;
	};
}
