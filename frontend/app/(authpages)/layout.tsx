import WithoutPaddingLayout from "@/components/shared/layouts/WithoutPaddingLayout";
import Reveal from "@/components/utils/Reveal";
import { getAuthPagesContent } from "@/services/getAuthPagesContent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TAuthPageLayoutProps = {
	children: React.ReactNode;
};

export default async function AuthPageLayout({
	children,
}: TAuthPageLayoutProps) {
	const authPageContent = await getAuthPagesContent();

	return (
		<WithoutPaddingLayout>
			<main className="flex-grow-1">
				<section className="account-section login-page py-6 h-full">
					<div className="container-fluid h-full">
						<div className="row h-full">
							<Reveal className="col-lg-6 d-none d-lg-block" delay={0.05}>
								<div className="bg-dark-blue-4 border rounded-4 h-full p-6 p-md-20 text-center d-flex flex-column justify-center">
									<h2 className="text-white mb-12">
										{authPageContent?.heading}
									</h2>
									<Image
										placeholder="blur"
										blurDataURL={authPageContent?.image?.url || ""}
										src={authPageContent?.image?.url || ""}
										alt="screen"
										width={1080}
										height={720}
										className="img-fluid w-full"
									/>
								</div>
							</Reveal>
							<div className="col-lg-6">
								<div className="close-btn">
									<Link
										href="/"
										className="icon w-12 h-12 rounded p-3 d-flex align-center justify-center ms-auto bg-primary bg-opacity-10 text-primary-dark border border-primary-dark border-opacity-25"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<g
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
											>
												<path d="M18 6 6 18M6 6l12 12" />
											</g>
										</svg>
									</Link>
								</div>
								{children}
							</div>
						</div>
					</div>
				</section>
			</main>
		</WithoutPaddingLayout>
	);
}
