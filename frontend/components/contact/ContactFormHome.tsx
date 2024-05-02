"use client";

import { getBrandLogo } from "@/services/getHomePageContent";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import screencontact from "@/public/images/screens/screen-5.png";
import ContactForm from "./ContactForm";

type TFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactFormHome() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>();
  const [brandLogo, setBrandLogo] = useState("");

  const onSubmit = (data: TFormData) => {
    // Here, you can handle form submission, such as sending data to your server or performing any other actions.
    console.log(data);
  };

  const fetchBrandLogo = async () => {
    const data = await getBrandLogo();
    setBrandLogo(data?.logo?.url);
  };

 
  return (
    <div className="container" id="contactforms">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
        <h2 className="text-white text-4xl font-bold text-primary-dark mt-5 mb-4"> Are You Ready To Change Your Life ? </h2>
       <p>   And Let Us Build You An Automated<br></br> YouTube Business That
Generates Profits Forever?</p>

          <video className="ts-video-poster" width="100%" height={300} controls> 
                <source src={"https://supermachines.io/wp-content/uploads/2024/04/e9384df7-dd8c-4670-a417-3edfa4bf5827.mp4"} type="video/mp4"/>       
                </video>
        </div>
        <div className="col-md-6">
          
         <ContactForm/>
        </div>
      </div>
    </div>
  );
}
