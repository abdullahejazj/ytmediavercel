interface SocialLink {
	id: number;
	platform: string;
	href: string;
}

interface TeamMember {
	id: number;
	name: string;
	designation: string;
	image: Record<string, any>;
	social_links: SocialLink[];
}

interface TeamData {
	id: number;
	heading: string;
	team_members: TeamMember[];
}

const yourData: TeamData = {
	id: 1,
	heading: "GenAI. is Powered by a\nDynamic Team.",
	team_members: [
		{
			id: 1,
			name: "Annette Black",
			designation: "Digital Marketer",
			image: {},
			social_links: [
				{ type: "twitter", url: "https://twitter.com/annetteblack" },
			],
		},
	],
};
