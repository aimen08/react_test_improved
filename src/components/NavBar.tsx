import React from "react";
import Logo from "../assets/logo.svg";
import { ShoppingBagIcon } from "@heroicons/react/solid";

interface Props {
  term: string | undefined;
}

function NavBar(props: Props) {
  return (
    <div className="flex justify-between p-5 items-center shadow">
      {/* left items */}
      <div className="flex space-x-2 items-center">
        <img src={Logo} className="w-7 md:w-10 " />
        <h1 className="text-sm font-bold md:text-xl text-[#E77FD8]">
          {props.term}
        </h1>
      </div>
      {/* right items */}
      <div>
        <ShoppingBagIcon className="text-[#E77FD8] w-7 md:w-10 cursor-pointer hover:text-[#d493cb]" />
      </div>
    </div>
  );
}

export default NavBar;
