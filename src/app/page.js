

import Header from "../components/layout/Header";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { Body } from "../components/layout/Body";

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-[#C2A27A] text-[#35250F]">
      <div className="header-component">
        <Header />
        <NavBar 
          className="flex"
        />
      </div>
      <Body />
    </div>
  );
}