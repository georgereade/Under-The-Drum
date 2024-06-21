import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const artistUrls = [
  "https://open.spotify.com/embed/artist/244AFgFclA9c1IcjWOAqoV?utm_source=generator",
  "https://open.spotify.com/embed/artist/5t4EvkMzfu9IJui3iiL2Rs?utm_source=generator",
  "https://open.spotify.com/embed/artist/1zdjZcUSe5thcIAIU5NRYh?utm_source=generator",
  "https://open.spotify.com/embed/artist/2HmnALl2GrcNUuI9C5visw?utm_source=generator",
  "https://open.spotify.com/embed/artist/6ZgfyJzSGlummUBhUK1hxw?utm_source=generator",
  "https://open.spotify.com/embed/artist/2md5CaM27EV4MySPaSUkgT?utm_source=generator",
  "https://open.spotify.com/embed/artist/73NsXu8p63LKM2s24QwxAr?utm_source=generator",
  "https://open.spotify.com/embed/artist/049UBlja7brPQkfnuStRth?utm_source=generator",
];

export default function Artists() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen p-4 bg-utd-grey py-12" id="artists">
      <div className="header-container">
        <h2
          className="font-extrabold py-4 text-4xl uppercase cursor-pointer flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Full Line-up 2024
          <span className={`arrow-icon ${isOpen ? "rotate" : ""}`}>
            <i className="fas fa-chevron-down"></i>
          </span>
        </h2>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center transition ease-in-out">
            {artistUrls.map((url, index) => (
              <iframe
                key={index}
                className="m-2 w-full md:w-1/2 lg:w-1/3"
                src={url}
                width=""
                height="152"
                allow="autoplay; fullscreen;"
                loading="lazy"
              ></iframe>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
