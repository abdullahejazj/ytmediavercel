import { IFavoriteTools } from "@/types/components/favorite-tools";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";

export default function FeaturesSection({ favoriteTools }: IFavoriteTools) {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="text-center mb-18">
					<Reveal el="h1" className="mb-0 text-white" delay={0.05}>
						<p style={{ width: "90%", textAlign: "center" }}>
							{favoriteTools?.heading}
						</p>
					</Reveal>
				</div>

				<div className="row g-6 g-xl-14">
					{favoriteTools?.tools.map((feature, index) => (
						<Reveal key={feature.id} className="col-lg-4" delay={0.2}>
							<Feature data={feature} index={index} />
						</Reveal>
					))}
				</div>

				<div className="text-center mt-12">
					{favoriteTools?.button?.variant === "contained" && (
						<Link
							href={`${favoriteTools?.button?.href}`}
							target={`${favoriteTools?.button?.target}`}
							className="btn btn-primary-dark"
						>
							{favoriteTools?.button?.label}
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
