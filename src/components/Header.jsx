import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";

import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

const customStyledBtn =
  "cursor-pointer transition transition-all ease-in-out duration-150 hover:scale-110 active:scale-95";

const HeaderMain = () => {
  return (
    <header>
      <div className="border-b border-gray-200 py-2">
        <div className="container flex justify-between items-center">
          <div className="flex font-bold text-4xl text-center sm:pb-0 text-blackish">
            <a href="/" className={`block ${customStyledBtn}`}>
              <Image
                src="/bazaar-60x60-logo.png"
                width={60}
                height={60}
                alt="Logo"
              />
            </a>
          </div>

          <div className="w-full sm:w-[300px] md:w-[70%] relative">
            <Navbar />

          </div>

          <div className="py-0 px-2 flex gap-4 text-gray-500 text-[30px]">
            <div className="relative">
              <HiOutlineShoppingCart className={customStyledBtn} />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </header>
  );
};

export default HeaderMain;
