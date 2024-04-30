import Image from "next/image";
import Link from "next/link";


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
            <div className="logo-container pt-4 pb-5 rounded d-flex justify-content-center align-items-center">
              <Image
                src={"https://res.cloudinary.com/dbnyrcetn/image/upload/v1714482975/msn_logo_white_1_e7febc5bb9.png"}
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
            <div className="logo-container pt-12 rounded pb-12 d-flex justify-content-center align-items-center ">
              <Image
                src={"https://res.cloudinary.com/dbnyrcetn/image/upload/v1714482975/CEO_Weekly_1_removebg_preview_1_44175124a9.png"}
                alt="CeoWeekly Logo"
                className="img-fluid btn"
                width={460}
                height={60}
              />
            </div>
          </Link>
        </div>
        <div className="col-md-4 mt-8 d-flex justify-content-center">
          <Link href="https://www.digitaljournal.com/pr/news/prwirecenter/ytmedia-io-review-is-yt-media-legit" passHref={true}>
            <div className="logo-container rounded d-flex justify-content-center  align-items-center">
              <Image
                src={"https://res.cloudinary.com/dbnyrcetn/image/upload/v1714482975/6597080865de637371e293ad_Newsroom_Images_copy_removebg_preview_1_1_4081242f77.png"}
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
