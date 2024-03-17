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
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
        <h2 className="text-white mb-12">Unlock the Power of
          GenAI Copywriting Tool</h2>
          <Link href="/">
            <Image
              src={screencontact || ""}
              alt="Logo"
              className="img-fluid"
              width={460}
              height={60}
             
            />
          </Link>
        </div>
        <div className="col-md-6">
          
         <ContactForm/>
        </div>
      </div>
    </div>
  );
}
