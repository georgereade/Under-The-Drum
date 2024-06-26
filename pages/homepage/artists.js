import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

const artistUrls = [
  {
    name: "Joshua Burnside",
    url: "https://open.spotify.com/embed/artist/244AFgFclA9c1IcjWOAqoV?utm_source=generator",
  },
  {
    name: "Junk Drawer",
    url: "https://open.spotify.com/embed/artist/5t4EvkMzfu9IJui3iiL2Rs?utm_source=generator",
  },
  {
    name: "Arliston",
    url: "https://open.spotify.com/embed/artist/1zdjZcUSe5thcIAIU5NRYh?utm_source=generator",
  },
  {
    name: "Oh Boland",
    url: "https://open.spotify.com/embed/artist/2HmnALl2GrcNUuI9C5visw?utm_source=generator",
  },
  {
    name: "Roe",
    url: "https://open.spotify.com/embed/artist/6ZgfyJzSGlummUBhUK1hxw?utm_source=generator",
  },
  {
    name: "Ben Traill",
    url: "https://open.spotify.com/embed/artist/2md5CaM27EV4MySPaSUkgT?utm_source=generator",
  },
  {
    name: "Arborist",
    url: "https://open.spotify.com/embed/artist/73NsXu8p63LKM2s24QwxAr?utm_source=generator",
  },
  {
    name: "Lisa Gorry",
    url: "https://open.spotify.com/embed/artist/049UBlja7brPQkfnuStRth?utm_source=generator",
  },
];

export default function Artists() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const header = document.getElementById("artists-div");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.add("fade-in-visible");
        }
      },
      { threshold: 1 }
    );

    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  return (
    <div className="w-screen p-4 bg-utd-grey py-12 z-10" id="artists">
      <div className="header-container">
        <h2
          className="font-extrabold py-4 text-4xl uppercase cursor-pointer flex items-center transition ease-in-out delay-10 hover:scale-110 fade-in"
          id="artists-div"
          onClick={() => setIsOpen(!isOpen)}
        >
          Full Line-up
          <span className={`arrow-icon ${isOpen ? "rotate" : ""} ml-2`}>
            <i className="fas fa-chevron-down"></i>
          </span>
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`flex flex-wrap justify-center overflow-scroll sm:overflow-hidden overflow-x-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
          id="artistsContainer"
          style={{ transitionProperty: "max-height, opacity" }}
        >
          {artistUrls.map(({ name, url }, index) => (
            <div
              className={`transition-opacity duration-1000 ease-in-out m-4 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              key={index}
            >
              <h3 className="uppercase text-utd-blue text-xl text-center font-bold">
                {name}
              </h3>
              <iframe
                className="m-2"
                src={url}
                width="300"
                height="152"
                allow="autoplay; fullscreen; encrypted-media;"
                loading="eager"
                alt={name}
                title={name}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
