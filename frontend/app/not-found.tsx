import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithPaddingLayout from "@/components/shared/layouts/WithPaddingLayout";
import { get404PageContent } from "@/services/get404PageContent";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page not found",
};

export default async function NotFound() {
	const notFoundContent = await get404PageContent();

	return (
		<WithPaddingLayout>
			<Header />
			<main className="flex-grow-1">
				<section className="py-10 py-lg-15">
					<div className="container">
						<div className="row justify-center">
							<div className="col-lg-6">
								<div className="text-center">
									<Image
										src={notFoundContent?.image?.url}
										width={1080}
										height={720}
										alt="not found"
										className="img-fluid mb-10"
									/>
									<h2 className="mb-4 text-white">{notFoundContent?.title}</h2>
									<p className="mb-8">{notFoundContent?.description}</p>
									{notFoundContent?.button?.variant === "contained" && (
										<Link
											href={notFoundContent?.button?.url || "#"}
											target={notFoundContent?.button?.target || "_self"}
											className="btn btn-primary-dark"
										>
											{notFoundContent?.button?.label}
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</WithPaddingLayout>
	);
}
