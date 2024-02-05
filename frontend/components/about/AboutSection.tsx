import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";

export default function AboutSection({ aboutContent }: any) {
	return (
		<section className="py-15">
			<div className="container">
				<div className="row align-center">
					<Reveal className="col-lg-6 col-xl-5" delay={0.05}>
						<div className="text-center text-lg-start">
							<p className="text-primary-dark fs-sm">{aboutContent?.title}</p>
							<h2 className="mb-4 text-white">{aboutContent?.heading}</h2>
							<p className="mb-8">{aboutContent?.description}</p>
							{aboutContent?.button &&
								aboutContent?.button?.variant === "contained" && (
									<Link
										href={aboutContent?.button?.url || "#"}
										target={aboutContent?.button?.target || "_self"}
										className="btn btn-lg btn-gradient-1"
									>
										{aboutContent?.button?.label}
									</Link>
								)}
						</div>
					</Reveal>
					<Reveal className="col-lg-6 offset-xl-1" delay={0.1}>
						<div className="text-center">
							<Image
								placeholder="blur"
								blurDataURL={aboutContent?.hero_image?.url || ""}
								src={aboutContent?.hero_image?.url || ""}
								alt="image"
								width={1080}
								height={720}
								className="img-fluid d-inline-block"
							/>
						</div>
					</Reveal>
				</div>
				<hr className="border-top border-lite-blue-4 opacity-100" />
				<div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
					{aboutContent?.images?.map((image: any, index: number) => (
						<Image
							key={index}
							src={image?.image?.data?.attributes?.url || ""}
							alt="icon"
							width={1080}
							height={720}
							className="img-fluid"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
