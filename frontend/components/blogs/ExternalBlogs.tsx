import Image from "next/image";
import Link from "next/link";

import ceoweekly from "@/public/images/blog/ceoweekly.png";
import dgjournal from "@/public/images/blog/dgjournal.png";
import msnlogo from "@/public/images/blog/msnlogo.png";

export default function ExternalBlogs() {
  return (
    <div className="container mt-20">
     <div className="row justify-content-center align-items-center">
        <div className="mb-10 ">
         <div> 
          <Link href="https://ceoweekly.com/yt-media-review-the-trustworthy-leadership-of-ceo-frank-emery-in-revolutionizing-youtube-automation/" passHref>
           
           <div className="d-flex justify-content-center align-items-center flex-column text-center">
           <p className="fs-5 text-white">&quot;A revolutionary service!&quot; - CEOWeekly</p>
             
           </div>
       
       </Link>
       <div> <Link href="https://nyweekly.com/business/nyweeklys-investment-of-the-year-how-yt-medias-youtube-automation-can-net-you-50k-monthly/" passHref>
           
           <div className="d-flex justify-content-center align-items-center flex-column text-center">
            
           <h4 className="fs-10 text-white">&quot;Investment of the Year!&quot; - NYWeekly</h4>
           </div>
       
       </Link></div>
       </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 mb-3 d-flex justify-content-center ">
          <Link href="https://www.msn.com/en-us/money/other/yt-media-review-youtube-automation-program-delivers-3000-50000-monthly-for-investors/ar-AA1kUNdK" passHref={true}>
            <div className="logo-container pt-4 pb-5 rounded bg-light-blue-4 d-flex justify-content-center align-items-center">
              <Image
                src={msnlogo}
                alt="MSN Logo"
                className="img-fluid btn"
                width={460}
                height={60}
              />
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-3 d-flex  justify-content-center">
          <Link href="https://ceoweekly.com/yt-media-review-the-trustworthy-leadership-of-ceo-frank-emery-in-revolutionizing-youtube-automation/" passHref={true}>
            <div className="logo-container pt-12 rounded pb-12 bg-light-blue-4 d-flex justify-content-center align-items-center ">
              <Image
                src={ceoweekly}
                alt="CeoWeekly Logo"
                className="img-fluid btn"
                width={460}
                height={60}
              />
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-3 d-flex justify-content-center">
          <Link href="https://www.digitaljournal.com/pr/news/prwirecenter/ytmedia-io-review-is-yt-media-legit" passHref={true}>
            <div className="logo-container rounded bg-light-blue-4 d-flex justify-content-center  align-items-center">
              <Image
                src={dgjournal}
                alt="Digital Journal Logo"
                className="img-fluid btn"
                width={460}
                height={60}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
