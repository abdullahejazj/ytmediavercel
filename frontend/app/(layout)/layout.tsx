import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithPaddingLayout from "@/components/shared/layouts/WithPaddingLayout";
import {
	getBrandLogo,
	getHomePageContent,
} from "@/services/getHomePageContent";
import React from "react";

type TRootLayoutProps = {
	children: React.ReactNode;
};

export default async function WithLayoutPages({ children }: TRootLayoutProps) {
	const [homeContent, brandLogo] = await Promise.all([
		getHomePageContent(),
		getBrandLogo(),
	]);

	return (
		<WithPaddingLayout>
			<Header />
			{children}
			<Footer footerData={homeContent?.footer} brandLogo={brandLogo} />
		</WithPaddingLayout>
	);
}
