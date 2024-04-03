"use client"
import React from 'react';
import Breadcrumb from "@/components/shared/Breadcrumb";
import PricingSection from "@/components/pricing/PricingSection";
import { getPricingPlanContent } from "@/services/getPricingPlanContent";

export default function ThankYouPage() {
    // Fetch pricing plan content
    const fetchPricingData = async () => {
        return await getPricingPlanContent();
    }

    const [pricingPlanContent, setPricingPlanContent] = React.useState(null);

    React.useEffect(() => {
        fetchPricingData()
            .then(data => setPricingPlanContent(data))
            .catch(error => console.error('Error fetching pricing data:', error));
    }, []);

    return (
        <main className="flex-grow-1">
            <Breadcrumb title="" path={[]} />
            <div className="container">
                <div className="text-center mt-10">
                    <h1 className="text-4xl font-bold text-primary-dark mt-5 mb-4">CONGRATULATIONS!</h1>
                    <h3 className="text-lg text-gray-700 mb-4 text-primary-dark">YOU ARE OFFICIALLY ON THE LIST!<br /></h3>

                    <div className='mt-10 mb-10'>
                        <h5 className='text-white'>Only a few channels remain for this month!</h5>
                        <h5 className="text-lg text-gray-700 mb-4 text-white">Now let's schedule your YouTube Automation consultation.</h5>
                    </div>
                    <h2 className="text-lg text-gray-700 mb-8 fw-bold text-gradient-2 typed-animationc">PLEASE CHOOSE A DATE ON OUR CALENDAR.</h2>
                    {/* Add your calendar component here */}
                    <div className="calendly-inline-widget" data-url="https://calendly.com/yt-media/youtube-accelerator-call2" style={{minWidth: '320px', height: '700px'}}></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </div>
            </div>
            {/* Render Pricing Section if data is available */}
            {pricingPlanContent && <PricingSection pricingPlanContent={pricingPlanContent} />}
        </main>
    );
}
