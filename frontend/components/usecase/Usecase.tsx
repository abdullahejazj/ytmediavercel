import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

type UseCaseProps = {
	data: {
		id: number;
		attributes: {
			title: string;
			description: string;
			slug: string;
			createdAt: string;
			updatedAt: string;
			publishedAt: string;
			content: string;
			icon: Record<string, any>;
		};
	};
	variant: string;
};

export default function Usecase({ data, variant = "none" }: UseCaseProps) {
	return (
		<div
			className={classNames("d-flex flex-column justify-between gap-6 h-full", {
				"text-center": variant === "center-styled",
			})}
		>
			<div
				className={classNames(
					"icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 text-primary-dark  ",
					{
						"p-2 border bg-gradient-3 borde-primary border-white border-opacity-10":
							variant === "none",
						"mx-auto": variant === "center-styled",
					}
				)}
			>
				<Image
					src={data?.attributes?.icon?.data?.attributes?.url}
					width={120}
					height={120}
					alt="Icon"
					className="img-fluid"
				/>
			</div>
			<div className="content flex-grow-1">
				<h5 className="text-white mb-4">{data?.attributes?.title}</h5>
				<p className="mb-0">{data?.attributes?.description}</p>
			</div>

			<div className="flex-shrink-0">
				<Link
					href={`/use-cases/${data?.attributes?.slug}`}
					className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
				>
					<span>Try {data?.attributes?.title}</span>
					<i className="ti ti-arrow-up-right fs-5"></i>
				</Link>
			</div>
		</div>
	);
}
