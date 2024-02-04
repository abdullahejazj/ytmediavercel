import { getFavoriteToolsContent } from "@/services/getFavoriteToolsContent";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";

export default async function FeaturesSection({
	showButton = false,
	showVideo = false,
}) {
	const favoritesTools = await getFavoriteToolsContent();

	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="text-center mb-18">
					<Reveal el="h1" className="mb-0 text-white" delay={0.05}>
						<div className="feature-heading">{favoritesTools?.heading}</div>
					</Reveal>
				</div>

				<div className="row g-6 g-xl-14">
					{favoritesTools?.tools.map((feature: any, index: any) => (
						<Reveal key={feature.id} className="col-lg-4" delay={0.2}>
							<Feature data={feature} index={index} />
						</Reveal>
					))}
				</div>

				{favoritesTools?.button?.variant === "contained" && showButton && (
					<div className="text-center mt-12">
						<Link
							href={favoritesTools.button.href}
							target={favoritesTools.button.target}
							className="btn btn-primary-dark"
						>
							{favoritesTools.button.label}
						</Link>
					</div>
				)}

				{favoritesTools?.video && showVideo && (
					<Reveal
						className="video-popup-container position-relative"
						delay={0.05}
					>
						<div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-16">
							<Image
								placeholder="blur"
								blurDataURL={
									favoritesTools.video.thumbnail?.data?.attributes?.url || ""
								}
								src={
									favoritesTools.video.thumbnail?.data?.attributes?.url || ""
								}
								width={1080}
								height={720}
								alt="thumb"
								className="img-fluid w-full h-full object-cover"
							/>
						</div>
						<Link
							href={favoritesTools.video.video_url || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={
									favoritesTools.video.play_icon?.data?.attributes?.url || ""
								}
								width={115}
								height={115}
								alt="Play icon"
								className="video-play-btn bg-primary-dark text-dark"
							/>
						</Link>
					</Reveal>
				)}
			</div>
		</section>
	);
}
