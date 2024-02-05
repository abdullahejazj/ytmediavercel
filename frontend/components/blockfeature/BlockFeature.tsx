import { TBlockFeature } from "@/types/blockfeature";
import { TextItem } from "@/types/components/features";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";

type TBlockFeatureProps = {
	index: number;
	data: TBlockFeature | any;
	reversed?: boolean;
};

export default function BlockFeature({
	index,
	data,
	reversed = false,
}: TBlockFeatureProps) {
	return (
		<div
			className={classNames("row g-6 gx-lg-14 gx-xl-20 align-center", {
				"flex-row-reverse": reversed,
				"mt-10": index !== 0,
			})}
		>
			<Reveal className="col-lg-6" delay={0.15}>
				<div className="content">
					<p className="text-primary-dark">{data?.title}</p>
					<h1 className="text-white mb-8">{data?.heading}</h1>
					<p className="mb-6">{data?.description}</p>
					<ul className="list-unstyled list-check mb-8">
						{data?.text_items?.map((item: TextItem) => (
							<li key={item?.id}>
								<i className="ti ti-check fs-5"></i>
								<span>{item?.item}</span>
							</li>
						))}
					</ul>
					{data?.button ? (
						<Link
							href={`${data?.button?.url || '#'}`}
							target={`${data?.button?.target}`}
							className="arrow-link arrow-link-primary-dark text-primary-dark gap-3"
						>
							<span>{data?.button?.label}</span>
							<i className="ti ti-arrow-up-right fs-5"></i>
						</Link>
					) : null}
				</div>
			</Reveal>
			<Reveal className="col-lg-6" delay={0.25}>
				<div className="feature-img">
					<Image
						src={`${data?.image?.data?.attributes?.url || ""}`}
						height={647}
						width={608}
						alt="icon"
						className="img-fluid h-auto"
					/>
				</div>
			</Reveal>
		</div>
	);
}
