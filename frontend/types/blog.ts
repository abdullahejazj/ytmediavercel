export type TPostMetadata = {
	id?: string | number;
	title: string;
	content: string;
	category: Record<string, any>;
	createdAt: string;
	slug: string;
	readingTime?: string;
	thumbnail: Record<string, any>;
};

export type TPostData = TPostMetadata & {
	content: string;
	cover: string;
};
