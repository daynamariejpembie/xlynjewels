import { NavBar } from "@/components/layout/NavBar/NavBar";
import Header from "@/components/layout/Header";
import { Body } from "@/components/layout/Body";
import Footer from "@/components/layout/Footer";

export default function About() {
    return (
         <div className="flex flex-col items-center bg-[#C2A27A] text-[#35250F]">
              <div className="header-component">
                <Header />
                <NavBar 
                  className="flex"
                />
              </div>
              <Body />
              <Footer />
            </div>
    )
}