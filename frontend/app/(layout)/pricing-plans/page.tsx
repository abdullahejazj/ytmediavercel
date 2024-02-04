import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import PricingSection from "@/components/pricing/PricingSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { getPricingPlanContent } from "@/services/getPricingPlanContent";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing Plans",
};

export default async function PricingPlans() {
	const [pricingPlanContent] = await Promise.all([getPricingPlanContent()]);

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Pricing & Plan"
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Pricing",
					},
				]}
			/>

			<PricingSection pricingPlanContent={pricingPlanContent} showFiltering />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
