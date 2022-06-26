import React, { useState } from "react";
import { logo, hamburger } from "../../public/images/";
import Image from "next/image";
import Link from "next/link";

// TODO: Separate out the header and navbar into separate components
// TODO: Pass logo and menu items as props from the Header component

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(() => !isOpen);
  }

  return (
    <header className="relative px-6 pt-10 pb-2 Header">
      <div className="flex justify-between">
        <div className="flex Header__left">
          <div className="mr-11 Header__logo">
            <Image src={logo} alt="company-logo" data-testid="logo" />
          </div>
          <nav className="Navbar__menu--desktop">
            <ul className="hidden md:flex font-bold text-neutralGray md:w-[26.875rem]">
              <li className="hover:text-primaryDarkViolet mr-7">
                <Link href="#">Features</Link>
              </li>
              <li className="hover:text-primaryDarkViolet mr-7">
                <Link href="#">Pricing</Link>
              </li>
              <li className="hover:text-primaryDarkViolet">
                <Link href="#">Resources</Link>
              </li>
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
          <nav className="hidden Header__buttons--desktop md:contents">
            <ul className="flex justify-between w-48 font-bold">
              <li className="text-neutralGray hover:text-primaryDarkViolet">
                <Link href="#">Login</Link>
              </li>
              <li className="">
                <div className="relative px-6 py-2 text-white bg-primaryCyan rounded-3xl bottom-2 hover:opacity-60">
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
          <li className="mx-6 border-b border-opacity-25 py-7 border-neutralGray">
            <Link href="#">Resources</Link>
          </li>

          <li className="pt-8">
            <Link href="#">Login</Link>
          </li>
          <li className="flex justify-center pt-6 pb-10">
            <div className="bg-primaryCyan py-2 w-[85%] rounded-3xl">
              <Link href="#">Sign Up</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
