import React from "react";
import Reveal from "../utils/Reveal";
import Usecase from "./Usecase";

export default function UsecaseSection({ variant = "none", useCases }: any) {
	return (
		<React.Fragment>
			{useCases?.data?.map((useCase: any) => (
				<Reveal
					key={useCase?.data?.attributes?.slug}
					className="col"
					delay={0.15}
				>
					<Usecase data={useCase} variant={variant} />
				</Reveal>
			))}
		</React.Fragment>
	);
}
