export interface TextItem {
	id: number;
	item: string;
}

interface Button {
	id: number;
	variant: string;
	label: string;
	href: string;
	target: string;
}

interface Feature {
	id: number;
	title: string;
	heading: string;
	description: string;
	image: Record<string, any>;
	text_items: TextItem[];
	button: Button;
}

export interface IFeatures {
	features: {
		id: number;
		features: Feature[];
	};
}
