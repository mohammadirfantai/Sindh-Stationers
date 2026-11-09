
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import lightLogo from "../assets/logos/Sindh Stationers Logo (Light).svg";
import useLoaderComplete from "../hooks/useLoaderComplete";

function Navbar() {
  const loaderComplete = useLoaderComplete();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Brands", href: "#brands" },
    { name: "About", href: "#about" },
    { name: "FAQ's", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    const closeOnDesktopResize = () => {
      if (window.innerWidth > 1023) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktopResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktopResize);
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${loaderComplete ? "navbar-loaded" : ""}`}>
      <nav className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={lightLogo} alt="Sindh Stationers" />
        </a>

        <button
          ref={menuToggleRef}
          className={`navbar-menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar-links ${menuOpen ? "is-open" : ""}`}
          id="primary-navigation"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="link-underline"
              style={{ "--link-index": index }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
