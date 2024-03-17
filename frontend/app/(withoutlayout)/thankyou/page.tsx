import React from 'react';
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function ThankYouPage() {
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
                </div>
            </div>
        </main>
    );
}
