import { TFeature } from "@/types/feature";
import Image from "next/image";

type TFeatureProps = {
	data: TFeature;
	index: number;
};

export default function Feature({ data }: TFeatureProps) {
	const { title, description, icon } = data;

	return (
		<div className="d-flex flex-column gap-6 flex-lg-row">
			<div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
				{icon ? (
					<Image
						src={`${icon?.data?.attributes?.url}`}
						width={120}
						height={120}
						alt="Icon"
						className="img-fluid"
					/>
				) : (
					<i className={`fs-3 ti ti-alpha`}></i>
				)}
			</div>
			<div className="content">
				<h4 className="mb-4 text-white">{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}
