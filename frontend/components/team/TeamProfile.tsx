import { TProfile } from "@/types/profile";
import Image from "next/image";
import Link from "next/link";

type TTeamProfileProps = {
	data: TProfile;
};

export default function TeamProfile({ data }: any) {
	const { name, designation, image, social_links } = data || {};

	return (
		<div className="team-card text-center">
			<Image
				src={image?.data?.attributes?.url || ""}
				alt="team"
				height={200}
				width={200}
				className="img-fluid team-member-img mb-6"
			/>
			<h4 className="text-white mb-1">{name}</h4>
			<p className="fs-sm mb-2">{designation}</p>
			<ul className="list-unstyled d-flex flex-wrap justify-center align-center gap-3 social-list mb-0">
				{social_links?.length > 0 &&
					social_links?.map((socialLink: any) => (
						<li key={socialLink?.id}>
							<Link
								href={socialLink?.url || "#"}
								target={socialLink?.target || "_blank"}
							>
								<Image
									src={socialLink?.icon?.data?.attributes?.url || ""}
									width={20}
									height={20}
									alt={socialLink?.platform}
								/>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
