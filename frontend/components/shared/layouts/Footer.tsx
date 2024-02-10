import Newsletter from "@/components/utils/Newsletter";
import {
	getBrandLogo,
	getHomePageContent,
} from "@/services/getHomePageContent";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
	const [homeContent, brandLogo] = await Promise.all([
		getHomePageContent(),
		getBrandLogo(),
	]);

	return (
		<footer className="footer pt-10 pt-lg-15">
			<div className="container">
				<div className="row g-10">
					<div className="col-lg-9 col-xl-8 order-lg-2">
						<div className="row g-6">
							{homeContent?.footer?.footer_columns?.map((column: any) => (
								<div key={column?.id} className="col-md-4 col-lg-4">
									<div className="footer-widget text-center text-md-start">
										<h6 className="text-white mb-2">{column?.label}</h6>
										<ul className="link-list list-unstyled mb-0">
											{column?.links?.map((link: any) => (
												<li key={link?.id}>
													<Link
														key={link?.id}
														href={link?.url || "#"}
														target={link?.target || "_self"}
													>
														{link?.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}

							{/* Social column */}
							<div className="col-md-4 col-lg-4">
								<div className="footer-widget text-center text-md-start">
									<h6 className="text-white mb-4">
										{homeContent?.footer?.footer_social_column?.label}
									</h6>
									<Newsletter />
									<ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-md-start gap-3 social-list mb-0 mt-5">
										{homeContent?.footer?.footer_social_column?.social_links?.map(
											(social: any) => (
												<li key={social?.id}>
													<Link
														href={social?.url || "#"}
														target={social?.target || "_blank"}
													>
														<Image
															src={social?.icon?.data?.attributes?.url || ""}
															width={20}
															height={20}
															alt={social?.platform}
														/>
													</Link>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 order-lg-1 me-auto">
						<div className="footer-widget text-center text-lg-start">
							<Link href="/">
								<Image
									placeholder="blur"
									blurDataURL={brandLogo?.logo?.url || ""}
									src={brandLogo?.logo?.url || ""}
									alt="GenAi"
									width={134}
									height={34}
									priority
									className="img-fluid"
								/>
							</Link>
							<p className="fs-sm mb-0 mt-4">
								{homeContent?.footer?.description}
							</p>
						</div>
					</div>
				</div>

				<div className="text-center py-6 mt-8">
					<p className="fs-sm mb-0">{homeContent?.footer?.copyright_text}</p>
				</div>
			</div>
		</footer>
	);
}
