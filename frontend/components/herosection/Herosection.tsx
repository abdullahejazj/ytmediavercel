"use client"
import { useState } from "react";
import shapeImage from "@/public/images/shapes/blurry-shape-1.svg";
import { IHeroSection } from "@/types/components/hero-section";
import Image from "next/image";
import Link from "next/link";
import TypedText from "./TypedText";
import   './herostyle.css'
export default function Herosection({ heroContent }: IHeroSection) {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isThumbnailVisible, setIsThumbnailVisible] = useState(true);

  const handleThumbnailClick = () => {
    setIsThumbnailVisible(false);
    setIsVideoVisible(true);
  };

  return (
    <section className="hero-section style-1 overflow-hidden bg-dark pt-30 pb-15 pb-lg-20 pt-xl-36" data-bs-theme="dark">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-9">
            <div className="text-center">
              <div className="position-relative z-1">
            <div className="siren-wrapper">
            <div className="siren-text">
                <div className="siren-red-icon"></div>
                <div >“Minimum of $9,500 Required to Invest”</div>
              </div> </div>             
                <h1 className="text-white mb-8">
                  {heroContent?.heading} <br />
                  <TypedText typeWriter={heroContent?.type_writer} />
                </h1>
                {heroContent?.button?.variant === "contained" && (
                  <Link href={heroContent?.button?.url || "#"} target={`${heroContent?.button?.target}`} className="btn btn-lg btn-gradient-1">
                    {heroContent?.button?.label}
                  </Link>
                )}
              </div>
              <div className="image-with-shape mt-12">
                <div className="">
                  {isVideoVisible ? (
                    <video
                      autoPlay
					  width="full" height="600"
                      loop
                      
                      className="d-inline-block  top-0 start-0 cursor-pointer"
                      style={{ width: "100%" }}
                      onLoadedMetadata={() => setIsThumbnailVisible(false)}
                    >
                      <source src="https://supermachines.io/wp-content/uploads/2024/04/Home-Page-Video-YT-Wealth-Builders.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    isThumbnailVisible && (
                      <Image
                        placeholder="blur"
                        blurDataURL={`${heroContent?.hero_image?.data?.attributes?.url}`}
                        src={`${heroContent?.hero_image?.data?.attributes?.url}`}
                        width={1080}
                        height={720}
                        style={{borderRadius:"20px"}}
                        alt="hero image"
                        className="img-fluid d-inline-block cursor-pointer b"
                        onClick={handleThumbnailClick}
                      />
                    )
                  )}
                </div>
              </div>
              <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                {heroContent?.text_items?.map((item) => (
                  <li key={item?.id}>{item?.item}</li>
                ))}
              </ul>
              <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                {heroContent?.image_items?.map((image) => (
                  <Image
                    key={image?.id}
                    src={`${image?.image?.data?.attributes?.url}`}
                    width={1080}
                    height={720}
                    alt="icon"
                    className="img-fluid"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
