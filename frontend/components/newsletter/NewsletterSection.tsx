import { getNewsletterContent } from "@/services/getNewsletterContent";
import Image from "next/image";
import Newsletter from "../utils/Newsletter";
import Reveal from "../utils/Reveal";

const NewsletterSection = async () => {
	const newsletterContent = await getNewsletterContent();

	return (
		<div className="row align-center">
			<Reveal className="col-lg-6 col-xl-5" delay={0.05}>
				<div className="text-center text-lg-start">
					<h1 className="mb-4 text-white">{newsletterContent?.heading}</h1>
					<p className="mb-8">{newsletterContent?.description}</p>
					<div className="w-xl-3quarter">
						<Newsletter />
					</div>
				</div>
			</Reveal>
			<Reveal className="col-lg-6 offset-xl-1" delay={0.1}>
				<div className="text-center">
					<Image
						placeholder="blur"
						blurDataURL={newsletterContent?.image?.url || ""}
						src={newsletterContent?.image?.url || ""}
						width={1080}
						height={720}
						alt="image"
						className="img-fluid d-inline-block"
					/>
				</div>
			</Reveal>
		</div>
	);
};

export default NewsletterSection;
