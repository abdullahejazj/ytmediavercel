import React from 'react';

const videos = [
  {
    name: "Marcus - Development @ Open AI",
    url: "https://supermachines.io/wp-content/uploads/2024/04/YT-Wealth-Builder-Testimonials.mp4",
    testimonial: "Frank  helped me take $0 to $150,000 in just months!"
  },
  {
    name: "Olivia - Owner @ Paws for Pets",
    url: "https://supermachines.io/wp-content/uploads/2024/04/YT-Wealth-Builder-Testimonials-2.mp4",
    testimonial: "I’ve already made my initial investment and currently profiting high 4-figures every month. I’ve also received offers for over $20,000 for just 1 of my channels!"
  },
  {
    name: "Mike @ Omnicon Group",
    url: "https://supermachines.io/wp-content/uploads/2024/04/e9384df7-dd8c-4670-a417-3edfa4bf5827.mp4",
    testimonial: "Within 5 months, these channels have been making $7,500+ Monthly."
  },
  
];

const HomePageVideos = () => {
  return (
    <div className="container mt-20">
      <h2>Testimonials</h2>
      <div className="row row-cols-6 row-cols-md-6 g-4">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
               
                <video className="ts-video-poster" width="100%" height={200} controls> 
                <source src={video.url} type="video/mp4"/>
                  
                </video>
               
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageVideos;
