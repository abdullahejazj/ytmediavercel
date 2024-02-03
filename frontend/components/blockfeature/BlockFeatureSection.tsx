import { IFeatures } from "@/types/components/features";
import BlockFeature from "./BlockFeature";

export default function BlockFeatureSection({ features }: IFeatures) {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				{features?.features?.map((blockFeature, index) => (
					<BlockFeature
						key={blockFeature.id}
						index={index}
						data={blockFeature}
						reversed={index % 2 !== 0}
					/>
				))}
			</div>
		</section>
	);
}
