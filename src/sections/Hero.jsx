"use client";

import { Fragment } from "react";
import "./Hero.css";
import Button from "../components/Button";
import useLoaderComplete from "../hooks/useLoaderComplete";

import heroBackground from "../assets/images/backgrounds/Hero Background.webp";
import mainBox from "../assets/images/hero-boxes/Main-Box.webp";

// Animate heading and eyebrow letter by letter
function splitText(text, startIndex = 0) {
  const words = text.split(" ");
  let letterIndex = startIndex;

  return words.map((word, wordIndex) => {
    const wordStart = letterIndex;
    letterIndex += word.length + 1;

    return (
      <Fragment key={`${startIndex}-word-${wordIndex}`}>
        <span className="hero-text-word">
          {[...word].map((letter, index) => (
            <span
              className="hero-letter"
              key={`${wordStart}-${index}`}
              style={{ "--letter-index": wordStart + index }}
            >
              {letter}
            </span>
          ))}
        </span>
        {wordIndex < words.length - 1 ? " " : null}
      </Fragment>
    );
  });
}

// Animate description word by word
function splitWords(text) {
  return text.split(" ").map((word, index) => (
    <Fragment key={index}>
      <span
        className="hero-word"
        style={{ "--word-index": index }}
      >
        {word}
      </span>{" "}
    </Fragment>
  ));
}

function Hero() {
  const loaderComplete = useLoaderComplete();

  const heading = "High Quality Packing Tape Made to Keep Things Secure.";

  return (
    <section
      className={`hero ${loaderComplete ? "hero-loaded" : ""}`}
      id="home"
    >
      {/* Background */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url("${heroBackground.src}")` }}
      />

      <div className="hero-overlay" />
      <div className="hero-gradient" />

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">
          {splitText("PACKING TAPE SUPPLIER · KARACHI, PAKISTAN")}
        </p>

        <h1 className="hero-heading">
          {splitText(heading)}
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
      <img src={mainBox.src} alt="" className="hero-box-main" />
    </section>
  );
}

export default Hero;
