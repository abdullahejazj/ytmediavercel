import Image from "next/image";
import Reveal from "../utils/Reveal";

export default function BrandLogo({ data }: any) {
	const { image } = data || {};

	return (
		<Reveal className="col" delay={0.1}>
			<div className="d-block position-relative text-center">
				<Image
					src={image?.data?.attributes?.url}
					alt="logo"
					height={36}
					width={150}
					className="img-fluid brand-img w-auto"
				/>
			</div>
		</Reveal>
	);
}
