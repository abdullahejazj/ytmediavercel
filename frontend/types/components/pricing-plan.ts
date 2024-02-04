interface Button {
	id: number;
	variant: string;
	label: string;
	href: string;
	target: string;
}

interface Feature {
	id: number;
	item: string;
}

export interface IPricingPlan {
	id: number;
	name: string;
	price: number;
	description: string;
	isPopular: boolean;
	type: string;
	button: Button;
	features: Feature[];
}

export interface IPricingPlanContent {
	id: number;
	title: string;
	heading: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	helper_text: string;
	plans: IPricingPlan[];
}
