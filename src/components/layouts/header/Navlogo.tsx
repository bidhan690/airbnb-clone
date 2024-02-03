import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navlogo() {
  return (
    <Link href="/" className="h-full">
      <div className="flex gap-2 items-center h-full">
        <Image
          src="/icons/airbnb-logo.svg"
          width={32}
          height={32}
          priority
          className="w-8"
          alt="airbnb-logo"
        />
        <h2 className="text-red-500 font-bold text-2xl font-sans">airbnb</h2>
      </div>
    </Link>
  );
}
