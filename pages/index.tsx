import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Map from "@/islands/Map";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="">
        <Hero />
        <Testimonials />
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
