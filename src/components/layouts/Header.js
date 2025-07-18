import Image from "next/image";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";



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


export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 overflow-hidden ">
      <div className="max-w-[1400px] mx-auto h-20 px-4 sm:px-6 lg:px-8 mt-2 mb-4 flex justify-between items-center rounded-lg ">
        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Image
              alt="ExxerAiLogo"
              src="/images/exerra_ai_title.png"
              width={65}
              height={65}
              className="object-contain blur-text-fade-in"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span
              className="text-2xl font-bold tracking-widest whitespace-nowrap text-white max-sm:text-lg  max-md:text-xl blur-text-fade-in"
              style={{ fontFamily: "Satisfy" }}
            >
              Exerra AI
            </span>
          </div>
        </div>

        {/* Buttons & Icons */}
        <div className="flex items-center space-x-2">
          <button className="shiny-button px-4 py-2 rounded-lg text-white font-bold relative overflow-hidden group">
            <span className="shiny-text z-10 relative">Join Now</span>
            <span className="absolute inset-0 rounded-lg p-[1px]">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#ffb237] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-shine"></span>
            </span>
          </button>

          <button className="shiny-button px-4 py-2 rounded-lg text-white font-bold relative overflow-hidden group max-sm:hidden">
            <span className="shiny-text z-10 relative">
              Explore our Services
            </span>
            <span className="absolute inset-0 rounded-lg p-[1px]">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#ffb237] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-shine"></span>
            </span>
          </button>

          {/* Social Icons */}
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
    </div>
  );
}
