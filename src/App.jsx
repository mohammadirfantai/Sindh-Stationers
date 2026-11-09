import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import BrandsWeSupply from "./sections/BrandsWeSupply";
import QuickFacts from "./sections/QuickFacts";
import Products from "./sections/Products";
import WhyChooseUs from "./sections/WhyChooseUs";
import AboutUs from "./sections/AboutUs";
import HowItWorks from "./sections/HowItWorks";
import FAQs from "./sections/FAQs";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <BrandsWeSupply />
      <QuickFacts />
      <Products />
      <WhyChooseUs />
      <AboutUs />
      <HowItWorks />
      <FAQs />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;
