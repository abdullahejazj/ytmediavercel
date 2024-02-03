interface TypeWriterItem {
	id: number;
	word: string;
}

interface Button {
	id: number;
	variant: string;
	label: string;
	href: string;
	target: string;
}

interface HeroImageData {
	id: number;
	attributes: Record<string, any>;
}

interface HeroImage {
	data: HeroImageData;
}

interface TextItem {
	id: number;
	item: string;
}

interface ImageItem {
	id: number;
	image: Record<string, any>;
}

export interface IHeroSection {
	heroContent: {
		id: number | string;
		title: string;
		heading: string;
		type_writer: TypeWriterItem[];
		button: Button;
		hero_image: HeroImage;
		text_items: TextItem[];
		image_items: ImageItem[];
	};
}
