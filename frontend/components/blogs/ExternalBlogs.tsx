import Image from "next/image";
import Link from "next/link";

import ceoweekly from "@/public/images/blog/ceoweekly.png";
import dgjournal from "@/public/images/blog/dgjournal.png";
import msnlogo from "@/public/images/blog/msnlogo.png";
import crunchbaselogo from "@/public/images/blog/crunchb.png"
import yahoo from "@/public/images/blog/Yahoo-Logo.png"
import apnn from "@/public/images/blog/apnn.png"
import ventslogo from "@/public/images/blog/vents.svg"
import newstrack from "@/public/images/blog/newtrack.jpeg"



const externalblogslinks = [
  {
    "imageSrc": ceoweekly,
    "link": "https://ceoweekly.com/yt-media-review-the-trustworthy-leadership-of-ceo-frank-emery-in-revolutionizing-youtube-automation/"
  },
  {
    "imageSrc": dgjournal,
    "link": "https://www.digitaljournal.com/pr/news/globe-pr-wire/yt-wealth-builders-review-2024-1881978217.html"
  },
  {
    "imageSrc": msnlogo,
    "link": "https://www.msn.com/en-us/news/other/yt-wealth-builders-recognized-as-the-top-passive-income-opportunity-of-2024-by-leading-investors-and-publications/ar-AA1nwGNH?disableErrorRedirect=true&infiniteContentCount=0"
  },
  {
    "imageSrc": crunchbaselogo,
    "link": "https://www.crunchbase.com/organization/yt-wealth-builders"
  },
  {
    "imageSrc": yahoo,
    "link": "yahoo.com"
  },
  {
    "imageSrc": apnn,
    "link": "https://www.apnnews.com/yt-wealth-builders-pioneering-the-future-of-youtube-automation/"
  },
  {
    "imageSrc": ventslogo,
    "link": "https://ventsmagazine.com/2024/04/17/yt-wealth-builders-review-2024-launches-revolutionary-youtube-automation-program/"
  },
  {
    "imageSrc": newstrack,
    "link": "https://english.newstracklive.com/news/is-yt-wealth-builders-legit-how-i-transformed-my-youtube-channel-to-earn-100k-every-month-sc71-nu371-ta371-1315613-1.html"
  }
]

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
      {externalblogslinks.map((item, index) => (
          <div key={index} className="col-md-3 mb-3 d-flex justify-content-center">
            <Link href={item.link} passHref>
              <div className="logo-container bg-light-blue-4 h-20 w-200  rounded d-flex justify-content-center align-items-center">
                <Image
                  src={item.imageSrc}
                  alt="Logo"
                  className="img-fluid btn"
                  width={460}
                  height={100}
                />
              </div>
            </Link>
          </div>
        ))}
    
      </div>
    </div>
  );
}
