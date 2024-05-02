import { getFaqContent } from "@/services/getFaqContent";
import Reveal from "../utils/Reveal";
import Faq from "./Faq";

export default async function FaqSection() {
	const faqContent = await getFaqContent();

	return (
		<section className="py-10 py-lg-15" id="faqs">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-10">
						<div className="text-center">
							<Reveal el="h1" className="text-white mb-0" delay={0.05}>
								<div className="faq-heading">{faqContent?.heading}</div>
							</Reveal>
						</div>
					</div>
				</div>

				<div className="row justify-center">
					<Reveal className="col-lg-8" delay={0.1}>
						<Faq data={faqContent?.faqs} />
					</Reveal>
				</div>
			</div>
		</section>
	);
}
