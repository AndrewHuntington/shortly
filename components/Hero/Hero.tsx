import React from "react";
import Image from "next/image";
import { illustrationWorking } from "../../public/images";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__image">
        <Image
          src={illustrationWorking}
          alt="person sitting at desktop typing on a computer"
        />
      </div>
      <div className="Hero__copy px-6 text-center mt-7">
        <h1 className="font-bold text-[2.625rem] tracking-[-0.07rem] leading-[3rem] text-primaryDarkViolet">
          More than just shorter links
        </h1>
        <p className="mt-4 text-neutralGray">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
    </div>
  );
}
