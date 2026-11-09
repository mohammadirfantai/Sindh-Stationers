
import "./Button.css";
import arrowIcon from "../assets/icons/Arrow Icon.svg";

function Button({
  href,
  variant = "cream",
  external = false,
  className = "",
  children,
}) {
  const text = String(children);

  return (
    <a
      href={href}
      className={`button button-${variant}${className ? ` ${className}` : ""}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className="button-text">
        <span className="button-text-inner">
          {text.split("").map((letter, index) => (
            <span
              className="button-letter"
              key={index}
              style={{ "--letter-index": index }}
            >
              <span className="button-letter-inner">
                {letter === " " ? "\u00A0" : letter}
              </span>
            </span>
          ))}
        </span>

        <span className="button-text-inner button-text-clone" aria-hidden="true">
          {text.split("").map((letter, index) => (
            <span
              className="button-letter"
              key={index}
              style={{ "--letter-index": index }}
            >
              <span className="button-letter-inner">
                {letter === " " ? "\u00A0" : letter}
              </span>
            </span>
          ))}
        </span>
      </span>

      <span className="button-icon">
        <img src={arrowIcon.src} alt="" />
      </span>
    </a>
  );
}

export default Button;
