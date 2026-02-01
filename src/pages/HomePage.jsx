import Hero from "../sections/Home/Hero";
import Stats from "../sections/Home/Stats";
import AboutHome from "../sections/Home/AboutHome";
import ContactHome from "../sections/Home/ContactHome"
import HomeProjectsPreview from "../sections/Home/HomeProjectsPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutHome />
      <HomeProjectsPreview />  
     <ContactHome />

    </>
  );
}
