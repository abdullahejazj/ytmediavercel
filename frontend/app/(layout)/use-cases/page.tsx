import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import UseCasesSection from "@/components/usecase/UseCasesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Usecases",
};

export default function UseCases() {
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Use Cases"
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Use Cases",
					},
				]}
			/>

			<UseCasesSection limit={100} />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
