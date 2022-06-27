import React from "react";
import Image from "next/image";
import { illustrationWorking } from "../../public/images";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__image">
        <Image
          src={illustrationWorking}
          alt="person sitting at desktop typing on a computer"
          className="translate-x-28 md:translate-x-0"
        />
      </div>
      <div className="px-6 text-center Hero__copy mt-7">
        <h1 className="font-bold text-[2.625rem] tracking-[-0.07rem] leading-[3rem] text-primaryDarkViolet">
          More than just shorter links
        </h1>
        <p className="mt-4 mb-8 text-neutralGray">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>

      <div className="flex justify-center Hero__button">
        <Button text="Get Started" variation="primary" />
      </div>
    </div>
  );
}
