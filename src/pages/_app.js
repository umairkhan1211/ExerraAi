import "../styles/globals.css";
import Head from "next/head"; 
import { Figtree, Rubik, Satisfy, Luckiest_Guy } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], display: "swap" });
const rubik = Rubik({ subsets: ["latin"], display: "swap" });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400", display: "swap" }); 
const luckiest = Luckiest_Guy({ subsets: ["latin"], weight: "400", display: "swap" });
export default function App({ Component, pageProps }) {
  return (
    <>

<Head>
        <title>Exerra AI</title>
        <link rel="icon" type="image/png" href="/images/exerra_ai_title.webp" />
        <meta
          name="description"
          content="Online Holy Quran Courses with Tajweed and Islamic Education."
        />
        <meta property="og:title" content="Exerra AI" />
        <meta
          property="og:description"
          content="Join our Services"
        />
        <meta property="og:image" content="/exerra_ai_title.png" />
      </Head>

      {/* <SplashCursor /> */}
      <Component {...pageProps} />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}

    </>
  );
}
