interface SocialLink {
	id: number;
	platform: string;
	url: string;
	target: string;
	icon: Record<string, any>;
}

export interface ITeamMember {
	id: number;
	name: string;
	designation: string;
	image: Record<string, any>;
	social_links: SocialLink[];
}

export interface ITeamSection {
	team: {
		id: number;
		heading: string;
		team_members: ITeamMember[];
	};
}
