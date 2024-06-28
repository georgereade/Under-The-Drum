import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  ScrollShadow,
} from "@nextui-org/react";

const artistUrls = [
  {
    id: 1,
    name: "Joshua Burnside",
    url: "https://open.spotify.com/embed/artist/244AFgFclA9c1IcjWOAqoV?utm_source=generator",
    desc: "Joshua Burnside is a Northern Irish singer-songwriter renowned for his innovative blend of folk, electronic, and world music influences.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5ebc12feb659a565ee3c54739d8",
  },
  {
    id: 2,
    name: "Arliston",
    url: "https://open.spotify.com/embed/artist/1zdjZcUSe5thcIAIU5NRYh?utm_source=generator",
    desc: "Arliston is a London-based alternative band known for their atmospheric sound and emotive songwriting.",
    profilepic:
      "https://i.scdn.co/image/ab67616100005174a8078f6d93d0860f90642fda",
  },
  {
    id: 3,
    name: "Arborist",
    url: "https://open.spotify.com/embed/artist/73NsXu8p63LKM2s24QwxAr?utm_source=generator",
    desc: "Arborist is the moniker of Northern Irish singer-songwriter Mark McCambridge, known for his poignant and evocative folk music.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb2475d12d8b3a823b1e4cf8a2",
  },
  {
    id: 4,
    name: "Roe",
    url: "https://open.spotify.com/embed/artist/6ZgfyJzSGlummUBhUK1hxw?utm_source=generator",
    desc: "Roe is a Northern Irish singer-songwriter known for her distinctive blend of indie-pop and electronic music.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb9f46765573bb835eec6d7fd2",
  },
  {
    id: 5,
    name: "Junk Drawer",
    url: "https://open.spotify.com/embed/artist/5t4EvkMzfu9IJui3iiL2Rs?utm_source=generator",
    desc: "Junk Drawer is a Belfast-based indie rock band acclaimed for their eclectic sound and introspective lyrics.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb8379b43f58078bbab58d3df4",
  },

  {
    id: 6,
    name: "Oh Boland",
    url: "https://open.spotify.com/embed/artist/2HmnALl2GrcNUuI9C5visw?utm_source=generator",
    desc: "Oh Boland are a three-piece band from Tuam Co. Galway. “Poppy but sloppy” rock‘n’roll defined by their buzzsaw guitar tone.",
    profilepic:
      "https://i.scdn.co/image/ab67616d0000b27372c3bb31f19b72b9e855f3cd",
  },
  {
    id: 7,
    name: "Ben Traill",
    url: "https://open.spotify.com/embed/artist/2md5CaM27EV4MySPaSUkgT?utm_source=generator",
    desc: "Ben Traill is a Northern Irish musician and songwriter renowned for his dynamic guitar work and compelling compositions.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5ebb9e738960880fe748a5a9546",
  },
  {
    id: 8,
    name: "Lisa Gorry",
    url: "https://open.spotify.com/embed/artist/049UBlja7brPQkfnuStRth?utm_source=generator",
    desc: "Lisa Gorry is an emerging Irish singer-songwriter known for her soulful voice and heartfelt lyrics.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb1822eb280938fc4de544dd74",
  },
];

export default function Artists() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-screen p-4 bg-utd-grey py-12 z-10" id="artists">
      <motion.div
        className="header-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <h2
          className="font-extrabold py-4 text-4xl uppercase cursor-pointer flex items-center transition ease-in-out delay-10 hover:scale-110"
          id="artists-div"
        >
          Line-up
        </h2>
      </motion.div>
      <div className="flex flex-col items-center">
        <ScrollShadow
          size={50}
          orientation="horizontal"
          offset={50}
          visibility="right"
        >
          <div
            className={`flex flex-row snap-x w-screen lg:flex-wrap lg:justify-center lg:overflow-hidden overflow-x-scroll py-6`}
            id="artistsContainer"
          >
            {artistUrls.map(({ id, name, url, desc, profilepic }) => (
              <motion.div
                key={id}
                className="relative w-96 m-4 h-80 mb-36 snap-x"
                animate={{ rotateY: flippedCards[id] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute backface-hidden snap-center"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Card
                    className="rounded-md bg-utd-navy h-fit md:mx-0 w-80 md:w-96 shadow-lg snap-center"
                    isBlurred={false}
                    isFooterBlurred={false}
                  >
                    <CardHeader>
                      <h4 className="md:text-tiny uppercase font-bold text-utd-blue">
                        {name}
                      </h4>
                    </CardHeader>
                    <Divider className="bg-utd-grey h-0.5" />
                    <CardBody className="h-32 scroll-smooth overflow-x-hidden">
                      <p className="text-md leading-relaxed">{desc}</p>
                    </CardBody>
                    <Image
                      alt={name}
                      src={profilepic}
                      className="w-full h-60 object-cover object-top rounded-none pointer-events-none"
                      removeWrapper
                    />
                    <CardFooter className="overflow-visible">
                      <i
                        className="fa-brands fa-spotify text-3xl cursor-pointer transition ease-in-out hover:scale-110"
                        onClick={() => handleCardClick(id)}
                      ></i>
                    </CardFooter>
                  </Card>
                </motion.div>
                <motion.div
                  className="relative rounded-md backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Card className="rounded-md bg-utd-navy shadow-lg h-full w-80 sm:w-96">
                    {" "}
                    <CardBody className="h-fit py-8">
                      {" "}
                      <iframe
                        className="m-0"
                        src={url}
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
                        loading="lazy"
                        alt={name}
                        title={name}
                        allowtransparency="true"
                        style={{ borderRadius: "16px" }}
                      ></iframe>
                    </CardBody>
                    <CardFooter>
                      {" "}
                      <i
                        className="fa-solid fa-arrow-rotate-left cursor-pointer text-3xl transition ease-in-out hover:scale-110"
                        onClick={() => handleCardClick(id)}
                      ></i>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
}
