"use client";

import shapeImage from "@/public/images/shapes/blurry-shape-1.svg";
import { IHeroSection } from "@/types/components/hero-section";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import TypedText from "./TypedText";

export default function Herosection({ heroContent }: IHeroSection) {
	return (
		<section
			className="hero-section style-1 hero-bg-gradient overflow-hidden bg-dark pt-30 pb-15 pb-lg-20 pt-xl-36"
			data-bs-theme="dark"
		>
			<div className="container">
				<div className="row justify-center">
					<div className="col-lg-9">
						<div className="text-center">
							<div className="position-relative z-1">
								<Reveal el="p" className="text-primary-dark">
									{heroContent?.title}
								</Reveal>
								<Reveal el="h1" className="text-white mb-8" delay={0.15}>
									{heroContent?.heading} <br />
									<TypedText typeWriter={heroContent?.type_writer} />
								</Reveal>

								{heroContent?.button?.variant === "contained" && (
									<Reveal delay={0.3}>
										<Link
											href={heroContent?.button?.url || "#"}
											target={`${heroContent?.button?.target}`}
											className="btn btn-lg btn-gradient-1"
										>
											{heroContent?.button?.label}
										</Link>
									</Reveal>
								)}
							</div>
							<Reveal delay={0.45}>
								<div className="image-with-shape">
									<Image
										src={shapeImage}
										alt="shape"
										className="shape animate-scale"
									/>
									<div className="mt-12 rounded-5 border border-primary-dark shadow-lg overflow-hidden position-relative z-1">
										<Image
											placeholder="blur"
											blurDataURL={`${heroContent?.hero_image?.data?.attributes?.url}`}
											src={`${heroContent?.hero_image?.data?.attributes?.url}`}
											width={1080}
											height={720}
											alt="hero image"
											className="img-fluid d-inline-block"
										/>
									</div>
								</div>
							</Reveal>
							<ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
								{heroContent?.text_items?.map((item) => (
									<li key={item?.id}>{item?.item}</li>
								))}
							</ul>
							<div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
								{heroContent?.image_items?.map((image) => (
									<Image
										key={image?.id}
										src={`${image?.image?.data?.attributes?.url}`}
										width={1080}
										height={720}
										alt="icon"
										className="img-fluid"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
