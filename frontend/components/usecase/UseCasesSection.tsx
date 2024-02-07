import {
	getUseCases,
	getUseCasesPageContent,
} from "@/services/getUseCasesContent";
import Reveal from "../utils/Reveal";
import Usecases from "./Usecases";

const UseCasesSection = async ({ limit = 8 }) => {
	const [casesContent, cases] = await Promise.all([
		getUseCasesPageContent(),
		getUseCases(limit),
	]);

	return (
		<section className="bg-striped bg-striped-sm bg-striped-bottom bg-dark-blue-4 py-20 py-lg-30">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-9">
						<div className="text-center">
							<Reveal el="p" className="text-primary-dark" delay={0.05}>
								{casesContent?.title}
							</Reveal>
							<Reveal el="h1" className="text-white mb-0" delay={0.1}>
								{casesContent?.heading}
							</Reveal>
						</div>
					</div>
				</div>
				<div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
					<Usecases useCases={cases} />
				</div>
			</div>
		</section>
	);
};

export default UseCasesSection;
