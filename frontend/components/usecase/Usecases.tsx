import React from "react";
import Reveal from "../utils/Reveal";
import Usecase from "./Usecase";

export default function Usecases({ variant = "none", useCases }: any) {
	return (
		<React.Fragment>
			{useCases?.map((useCase: any) => (
				<Reveal
					key={useCase?.attributes?.slug}
					className="col"
					delay={0.15}
				>
					<Usecase data={useCase} variant={variant} />
				</Reveal>
			))}
		</React.Fragment>
	);
}
