export type TReview = {
	id: number | string;
	name: string;
	designation: string;
	image: Record<string, any>;
	rating: number;
	message: string;
};
