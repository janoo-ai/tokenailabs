import { Suspense } from "react";
import { Hero1, Hero2, Hero3 } from "./_components/Home";
import Footer from "./_components/Footer/Footer";
import Load from "./_components/Loading/Load";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1   ">
      <Suspense fallback={<Load />}>
        <Hero1 />
        <Hero3 />
        <Hero2 />
        <div className="w-full h-1 bg-cyan-400"></div>
        <Footer />
      </Suspense>
    </div>
  );
}
