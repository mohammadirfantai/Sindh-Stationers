import "./Hero.css";
import Button from "../components/Button";
import useLoaderComplete from "../hooks/useLoaderComplete";

import heroBackground from "../assets/images/backgrounds/Hero Background.webp";
import mainBox from "../assets/images/hero-boxes/Main-Box.webp";

// Animate heading and eyebrow letter by letter
function splitText(text, startIndex = 0) {
  return [...text].map((letter, index) => (
    <span
      className="hero-letter"
      key={`${startIndex}-${index}`}
      style={{ "--letter-index": startIndex + index }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
}

// Animate description word by word
function splitWords(text) {
  return text.split(" ").map((word, index) => (
    <span
      className="hero-word"
      key={index}
      style={{ "--word-index": index }}
    >
      {word}&nbsp;
    </span>
  ));
}

function Hero() {
  const loaderComplete = useLoaderComplete();

  const headingLineOne = "High Quality Packing Tape";
  const headingLineTwo = "Made to Keep Things Secure.";

  return (
    <section
      className={`hero ${loaderComplete ? "hero-loaded" : ""}`}
      id="home"
    >
      {/* Background */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url("${heroBackground}")` }}
      />

      <div className="hero-overlay" />
      <div className="hero-gradient" />

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">
          {splitText("PACKING TAPE SUPPLIER · KARACHI, PAKISTAN")}
        </p>

        <h1 className="hero-heading">
          {splitText(headingLineOne)}
          <br />
          {splitText(headingLineTwo, headingLineOne.length)}
        </h1>

        <p className="hero-description">
          {splitWords(
            "From one roll to full cartons, we supply quality packing tape for homes, shops and businesses across Karachi."
          )}
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <Button
            href="https://wa.me/923002279528"
            variant="cream"
            external
          >
            Ask Current Price
          </Button>

          <a href="#products" className="hero-secondary-button">
            View Our Products
          </a>
        </div>
      </div>

      {/* Main Box */}
      <img src={mainBox} alt="" className="hero-box-main" />
    </section>
  );
}

export default Hero;