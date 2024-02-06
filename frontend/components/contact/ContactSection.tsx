import Image from "next/image";
import React from "react";
import Reveal from "../utils/Reveal";
import ContactForm from "./ContactForm";

export default function ContactSection({ contactDetails }: any) {
	return (
		<section className="py-15 pt-lg-30">
			<div className="container">
				<div className="row justify-center">
					<div className="col-lg-10">
						<div className="row row-cols-1 row-cols-md-2 gy-20 gx-lg-20">
							<Reveal className="col" delay={0.05}>
								<div className="text-center">
									<div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
										<Image
											src={
												contactDetails?.contact_address?.icon?.data?.attributes
													?.url || ""
											}
											width={60}
											height={60}
											alt="icon"
										/>
									</div>
									<h3 className="fw-medium mb-0">
										{contactDetails?.contact_address?.address}
									</h3>
								</div>
							</Reveal>
							<Reveal className="col" delay={0.1}>
								<div className="text-center">
									<div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
										<Image
											src={
												contactDetails?.contact_number?.icon?.data?.attributes
													?.url || ""
											}
											width={60}
											height={60}
											alt="icon"
										/>
									</div>
									<h3 className="fw-medium mb-0">
										{contactDetails?.contact_number?.numbers?.map(
											(number: any) => (
												<React.Fragment key={number?.id}>
													<span>{number?.item}</span>
													<br />
												</React.Fragment>
											)
										)}
									</h3>
								</div>
							</Reveal>
						</div>
					</div>
				</div>
				<Reveal
					className="ratio ratio-16x9 rounded-4 overflow-hidden mt-18"
					delay={0.15}
				>
					<iframe
						src={contactDetails?.map_url || ""}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="border-0"
					/>
				</Reveal>
				<Reveal className="row justify-center mt-18" delay={0.05}>
					<div className="col-lg-8 col-xl-6">
						<ContactForm />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
