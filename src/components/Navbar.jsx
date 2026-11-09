
import "./Navbar.css";
import lightLogo from "../assets/logos/Sindh Stationers Logo (Light).svg";
import useLoaderComplete from "../hooks/useLoaderComplete";

function Navbar() {
  const loaderComplete = useLoaderComplete();

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Brands", href: "#brands" },
    { name: "About", href: "#about" },
    { name: "FAQ's", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar ${loaderComplete ? "navbar-loaded" : ""}`}>
      <nav className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={lightLogo} alt="Sindh Stationers" />
        </a>

        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="link-underline"
              style={{ "--link-index": index }}
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
