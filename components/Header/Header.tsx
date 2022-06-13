import React, { useState } from "react";
import { logo, hamburger } from "../../public/images/";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(() => !isOpen);
  }

  return (
    <header className="Header pt-10 pb-6 px-6 relative">
      <div className="flex justify-between">
        <div className="Header__left">
          <nav className="Navbar__menu--desktop">
            <ul className="flex font-bold text-neutralGray md:w-[26.875rem] justify-between ">
              <li className="Header__logo">
                <Image src={logo} alt="company-logo" data-testid="logo" />
              </li>
              <div className="hidden md:contents">
                <li className="hover:text-primaryDarkViolet">
                  <Link href="#">Features</Link>
                </li>
                <li className="hover:text-primaryDarkViolet">
                  <Link href="#">Pricing</Link>
                </li>
                <li className="hover:text-primaryDarkViolet">
                  <Link href="#">Resources</Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className="Header__right">
          <div onClick={handleClick} className="md:hidden">
            <Image
              src={hamburger}
              alt="dropdown menu icon"
              data-testid="hamburger"
            />
          </div>
          <nav className="Header__buttons--desktop hidden md:contents">
            <ul className="flex justify-between w-48 font-bold">
              <li className="text-neutralGray hover:text-primaryDarkViolet">
                <Link href="#">Login</Link>
              </li>
              <li className="">
                <div className="bg-primaryCyan rounded-3xl py-2 px-6 text-white relative bottom-2 hover:opacity-60">
                  <Link href="#">Sign Up</Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Dropdown menu for mobile displays */}
      <nav
        className={`Navbar__menu--mobile ${isOpen ? "" : "hidden"}  mt-6 `}
        data-testid="dropdown-menu"
      >
        <ul className="text-white text-center font-bold text-lg w-[95%] bg-primaryDarkViolet rounded-lg z-50 absolute left-2.5">
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
      </nav>
    </header>
  );
}
