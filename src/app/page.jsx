import { Suspense } from "react";
import { Hero1, Hero2, Hero3, Hero4 } from "./_components/Home";
import Footer from "./_components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1   ">
      <Suspense fallback={<p>Loading video...</p>}>
        <Hero1 />
        <Hero3 />
        <Hero4 />
        <Hero2 />
      </Suspense>
      <div className="w-full h-2 bg-black"></div>
      <Footer />
    </div>
  );
}
