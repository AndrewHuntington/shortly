import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import hamburger from "../../public/images/hamburger.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(() => !isOpen);
  }

  return (
    <div className="Navbar pt-10 px-6 pb-6">
      <div className="flex justify-between">
        <Image src={logo} alt="company-logo" data-testid="logo" />
        <div onClick={handleClick} className="sm:hidden">
          <Image src={hamburger} alt="hamburger" data-testid="hamburger" />
        </div>
      </div>

      <div
        className={`Navbar__menu ${
          isOpen ? "" : "hidden"
        } bg-primaryDarkViolet mt-6 z-50 rounded-lg`}
      >
        <ul className="text-white text-center font-bold text-lg">
          <li className="pt-10">
            <Link href="#">Features</Link>
          </li>
          <li className="pt-7">
            <Link href="#">Pricing</Link>
          </li>
          <li className="py-7 border-b border-neutralGray border-opacity-25 mx-6">
            <Link href="#">Resources</Link>
          </li>

          <li className="pt-8">
            <Link href="#">Login</Link>
          </li>
          <li className="pt-6 pb-10 flex justify-center">
            <div className="bg-primaryCyan py-2 w-[85%] rounded-3xl">
              <Link href="#">Sign Up</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
