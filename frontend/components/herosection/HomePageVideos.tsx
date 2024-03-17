import React from 'react';

const videos = [
  {
    name: "Marcus - Development @ Open AI",
    url: "https://developie.net/content/uploads/2024/03/Marcus-Development-@-Open-AI.mp4#t=0.1",
    testimonial: "Frank and YT Media helped me take $0 to $150,000 in just months!"
  },
  {
    name: "Olivia - Owner @ Paws for Pets",
    url: "https://developie.net/content/uploads/2024/03/Olivia-Owner-@-Paws-for-Pets-Review.mp4#t=0.1",
    testimonial: "I’ve already made my initial investment and currently profiting high 4-figures every month. I’ve also received offers for over $20,000 for just 1 of my channels!"
  },
  {
    name: "Mike @ Omnicon Group",
    url: "https://developie.net/content/uploads/2024/03/Mike-@-Omnicon-Group.mp4#t=0.1",
    testimonial: "Within 5 months, these channels have been making $7,500+ Monthly."
  },
  {
    name: "Aaron - Team Lead @ Facebook Advertising",
    url: "https://developie.net/content/uploads/2024/03/Aaron-Team-Lead-@-Facebook-Advertising.mp4#t=0.1",
    testimonial: "Frank and his team built me an awesome Faceless Crypto Channel which is now netting me about $17,000+ per Month!"
  },
  {
    name: "Viv - Software Engineer @ Netflix​",
    url: "https://developie.net/content/uploads/2024/03/Viv-Software-Engineer-@-Netflix​.mp4#t=0.1",
    testimonial: "This has been one of my best investment decisions. Just 3 months and I received a life-changing check for $13,875 from Youtube."
  },
  {
    name: "Robert - VP of Sales @ Salesforce​",
    url: "https://developie.net/content/uploads/2024/03/Robert-VP-of-Sales-@-Salesforce​.mp4#t=0.1",
    testimonial: "I’m making $20,000+ per month and I can even sell these channels for a substantial profit. I never thought I could achieve financial freedom in less than a year."
  }
];

const HomePageVideos = () => {
  return (
    <div className="container mt-20">
      <h2>Testimonials</h2>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {videos.map((video, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
               
                <video className="ts-video-poster" width="100%" height={400} controls> 
                <source src={video.url} type="video/mp4"/>
                  
                </video>
               
                <h4 className="card-text text-center">{video.testimonial}</h4>
                <p className="card-title text-center text-danger">{video.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageVideos;
