import Image from "next/image";
import Layout from "../components/layouts/Layout";
import { Fascinate } from "next/font/google";
import TypewriterText from "../components/TypewriterText/TypewriterText";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import LeftSection from "../components/LeftSection/LeftSection";
import RightSection from "../components/RightSection/RightSection";
import { useState, useEffect } from "react";

const fascinate = Fascinate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const socials = [
  {
    name: "facebook",
    link: "https://facebook.com",
    icon: () => <FaFacebook />,
  },
  {
    name: "github",
    link: "https://github.com",
    icon: () => <FaGithub />,
  },
  {
    name: "twitter",
    link: "https://twitter.com",
    icon: () => <FaTwitter />,
  },
  {
    name: "linkedin",
    link: "https://linkedin.com",
    icon: () => <FaLinkedinIn />,
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="relative w-full min-h-screen">
        {/* Fixed Background */}
        <div className="fixed inset-0 w-full h-screen flex z-0">
          <div className="w-1/2 h-full bg-[linear-gradient(to_left,_#ffe174,_#ffb237,_#f26a1e,_#c54334,_#832c67,_#4b1c52,_#241437,_#0e0d1a)] bg-opacity-90"></div>
          <div className="w-1/2 h-full bg-[linear-gradient(to_right,_#0b0820,_#1a1050,_#3c1d7b,_#662ea3,_#933bcd,_#b14fd9,_#e971ff,_#ffcbf7)] bg-opacity-90"></div>
        </div>

        {/* Automation Logos Floating */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Image
            src="/images/zapier-logo.webp"
            alt="Zapier Logo"
            width={90}
            height={90}
            className="absolute top-[22%] left-[16%] opacity-70 animate-float"
          />
          <Image
            src="/images/make-logo.webp"
            alt="n8n Logo"
            width={130}
            height={130}
            className="absolute bottom-[24%] right-[5%] opacity-70 animate-float"
          />
          <Image
            src="/images/n8n-logo.webp"
            alt="Make Logo"
            width={130}
            height={130}
            className="absolute max-sm:top-[2%] top-[6%] right-[18%] opacity-70 animate-float"
          />
        </div>

        {/* Brain Image and Website Name */}
        <div className="fixed top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <Image
            src="/images/brain.webp"
            alt="Center Image"
            width={520}
            height={520}
            quality={100}
            className="object-contain drop-shadow-[0_0_40px_rgba(255,178,55,0.5)] animate-brain"
            priority
          />
          <h1
            className={`${fascinate.className} text-7xl max-sm:text-5xl tracking-wide shiny-text text-center w-full font-bold transition-all duration-700 ease-in-out ${
              scrolled ? "opacity-0 -translate-y-10" : "opacity-100 fade-in-up"
            }`}
          >
            Exerra.<span className="text-[#ffb237]">AI</span>
          </h1>
        </div>

        {/* Typewriter and Socials */}
        <div
          className={`fixed max-sm:top-[80%] max-md:top-[80%] top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center transition-all duration-700 ease-in-out ${
            scrolled ? "opacity-0 -translate-y-20" : "opacity-100"
          }`}
        >
          <TypewriterText />
          <div className="flex flex-row space-x-3 mt-6 md:hidden">
            {socials.map(({ name, link, icon: Icon }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ffb237] transition duration-300 text-base border border-[#ffffff] p-2 rounded-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Responsive Scroll Reveal Sections */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-10">
          {/* Left Section */}
          <div
            className={`absolute top-14 left-0 w-1/2 h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
              scrolled ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <LeftSection />
          </div>

          {/* Right Section */}
          <div
            className={`absolute top-14 right-0 w-1/2 h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
              scrolled ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <RightSection />
          </div>
        </div>

        {/* Scroll Spacer */}
        <div className="w-full h-[108vh] sm:h-[110vh] md:h-[115vh] lg:h-[120vh] relative z-0"></div>
      </div>
    </Layout>
  );
}