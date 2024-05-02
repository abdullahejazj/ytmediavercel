"use client";

import { IPricingPlan } from "@/types/components/pricing-plan";
import { TPricing, TPricingPlanType } from "@/types/pricing";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Reveal from "../utils/Reveal";
import Pricebox from "./Pricebox";

export default function PricingSection({
	pricingPlanContent,
	showFiltering,
}: any) {
	const [pricingPlanType, setPricingPlanType] =
		useState<TPricingPlanType>("monthly");
	const [visibleData, setVisibleData] = useState<TPricing[]>([]);

	useEffect(() => {
		setVisibleData(
			pricingPlanContent?.plans?.filter(
				(pricing: IPricingPlan) => pricing.type === pricingPlanType
			)
		);
	}, [pricingPlanContent, pricingPlanType]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | SyntheticEvent<HTMLLabelElement>,
		value: TPricingPlanType
	) => {
		e.preventDefault();
		setPricingPlanType(value);
	};

	return (
		<section className="py-10 py-lg-15" id="pricings">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-10">
						<div className="text-center">
							<Reveal el="p" className="text-primary-dark" delay={0.05}>
								{pricingPlanContent?.title}
							</Reveal>
							<Reveal el="h1" className="text-white mb-5" delay={0.1}>
								<div className="pricing-heading">
									{pricingPlanContent?.heading}
								</div>
							</Reveal>
							<Reveal el="p" className="mb-0" delay={0.15}>
								{pricingPlanContent?.helper_text}
							</Reveal>
						</div>

						{showFiltering && (
							<Reveal className="text-center mt-12" delay={0.2}>
								<div className="switch-wrapper border d-inline-flex rounded p-2 ">
									<input
										id="monthly"
										type="radio"
										name="switch"
										onChange={(e) => handleChange(e, "monthly")}
										checked={pricingPlanType === "monthly"}
									/>
									<input
										id="yearly"
										type="radio"
										name="switch"
										onChange={(e) => handleChange(e, "yearly")}
										checked={pricingPlanType === "yearly"}
									/>
									<label
										htmlFor="monthly"
										onClick={(e) => handleChange(e, "monthly")}
									>
										Monthly
									</label>
									<label
										htmlFor="yearly"
										onClick={(e) => handleChange(e, "yearly")}
									>
										Yearly
									</label>
									<span className="highlighter"></span>
								</div>
							</Reveal>
						)}
					</div>
				</div>
				<div className="row g-6 pricing-table">
					{visibleData?.map((pricing) => (
						<Reveal
							key={pricing?.id}
							className="col-md-6 col-lg-4"
							delay={0.05}
						>
							<Pricebox data={pricing} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
