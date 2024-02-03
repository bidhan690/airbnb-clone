import React from "react";
import Navlogo from "./Navlogo";
import Navcontent from "./Navcontent";

export default function Navbar() {
  return (
    <nav className="h-[80px] w-full mb-6">
      <div className="h-full w-full py-3 px-6 flex justify-between items-center">
        <Navlogo />
        <Navcontent />
      </div>
      <hr />
    </nav>
  );
}
