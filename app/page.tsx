import { Booking } from "@/components/sections/Booking/Booking";
import { Experience } from "@/components/sections/Experience/Experience";
import { Footer } from "@/components/sections/Footer/Footer";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Hero } from "@/components/sections/Hero/Hero";
import { Nav } from "@/components/sections/Nav/Nav";
import { Services } from "@/components/sections/Services/Services";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Experience />
        <Services />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
