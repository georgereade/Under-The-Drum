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
    desc: `Experimental folk songwriter and producer, blending Irish and world music influences. Rumbling, brooding, powerful and magnetic.`,
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5ebc12feb659a565ee3c54739d8",
  },

  {
    id: 2,
    name: "Arborist",
    url: "https://open.spotify.com/embed/artist/73NsXu8p63LKM2s24QwxAr?utm_source=generator",
    desc: "The moniker of Northern Irish singer-songwriter Mark McCambridge, known for his poignant and evocative folk music.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb2475d12d8b3a823b1e4cf8a2",
  },
  {
    id: 3,
    name: "Arliston",
    url: "https://open.spotify.com/embed/artist/1zdjZcUSe5thcIAIU5NRYh?utm_source=generator",
    desc: "London-based band known for their atmospheric sound, emotive lyrics, cerebral songwriting and soaring instrumentals.",
    profilepic:
      "https://i.scdn.co/image/ab67616100005174a8078f6d93d0860f90642fda",
  },
  // {
  //   id: 4,
  //   name: "Elaine Howley",
  //   url: "https://open.spotify.com/embed/artist/3STzxp6cfWNNQVcAQWYZgh?utm_source=generator",
  //   desc: "Vocalist, musician and producer, merging a tapestry of experimental processes, classic songwriting and emotive melodies.",
  //   profilepic:
  //     "https://i.scdn.co/image/ab67616d0000b273b7f8b60001a9ef56307c04d2",
  // },
  {
    id: 5,
    name: "Roe",
    url: "https://open.spotify.com/embed/artist/6ZgfyJzSGlummUBhUK1hxw?utm_source=generator",
    desc: "Alt-pop singer-songwriter from Derry, known for her distinctive blend of indie-pop and electronic music.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb9f46765573bb835eec6d7fd2",
  },
  {
    id: 6,
    name: "Junk Drawer",
    url: "https://open.spotify.com/embed/artist/5t4EvkMzfu9IJui3iiL2Rs?utm_source=generator",
    desc: "Incorporating Krautrock, post-punk, and psychedelia, Belfast's Junk Drawer offer an intuitively loose and idiosyncratic brand of indie rock.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb8379b43f58078bbab58d3df4",
  },

  {
    id: 7,
    name: "Oh Boland",
    url: "https://open.spotify.com/embed/artist/2HmnALl2GrcNUuI9C5visw?utm_source=generator",
    desc: "Three-piece band from Tuam Co. Galway. Self-described “poppy but sloppy” rock‘n’roll defined by their buzzsaw guitar tone.",
    profilepic:
      "https://i.scdn.co/image/ab67616d0000b27372c3bb31f19b72b9e855f3cd",
  },
  {
    id: 8,
    name: "Brand New Friend",
    url: "https://open.spotify.com/embed/artist/7iWAQPQTaX1BV0IYFbxKoU?utm_source=generator",
    desc: "North Coast indie pop powerhouses. Haunting and heavy production complementing sweet melodies and soaring choruses.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb9f6ce86296b108c89af964a7",
  },
  {
    id: 9,
    name: "Ben Traill",
    url: "https://open.spotify.com/embed/artist/2md5CaM27EV4MySPaSUkgT?utm_source=generator",
    desc: "Singer-songwriter blending catchy hooks and choruses with expressive and confessional storytelling.",
    profilepic: "/bent.jpeg",
  },
  {
    id: 10,
    name: "Susie Blue",
    url: "https://open.spotify.com/embed/artist/0CixME0zpIWI1vHtsqXzuP?utm_source=generator",
    desc: "Irish queer indie pop artist with Glastonbury and Electric Picnic performances.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb37206bf6a97f43bb00ec051d",
  },
  {
    id: 11,
    name: "Blue Whale",
    url: "https://open.spotify.com/embed/artist/6rUPywdqRWwwFTayo3qS9b?utm_source=generator",
    desc: "Fierce and playful four-piece band with math-rock and jazz influences.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb86519a66d27aeebc4a5f0b67",
  },
  {
    id: 12,
    name: "Neil Brogan",
    url: "https://open.spotify.com/embed/artist/1y6WMOklpc7zkhPiXZHIhY?utm_source=generator",
    desc: "Indie-pop with self-deprecating efficacy and contrasting jangly exuberance. Known for his previous project Sea Pinks.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5ebfe9c0dbb1b510e2e5f7dfee7",
  },
  {
    id: 13,
    name: "Demi O'Hara",
    url: "https://www.youtube.com/embed/x_OL9RXiN_w",
    desc: "27-year old Irish acoustic artist.",
    profilepic: "/demiohara.jpg",
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
    <div
      className="w-screen p-4 md:px-0 bg-utd-grey py-12 z-1 bg-[url('/Drawings.png')] bg-cover bg-top bg-repeat-y bg-local"
      id="artists"
    >
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
      <div
        className="flex-col items-center place-content-center md:w-1/3 mx-auto hidden sm:flex"
        id="lineup-poster"
      >
        <Image
          src="/UTDPOSTER-trim.jpg"
          className="w-screen h-full md:h-1/4 md:w-auto rounded-none"
          alt="Under The Drum"
          width=""
          height=""
        />
      </div>

      <div className="flex flex-col items-center z-50">
        <ScrollShadow size={30} orientation="horizontal" visibility="right">
          <div
            className={`flex flex-row snap-x w-screen lg:flex-wrap lg:justify-center lg:overflow-hidden overflow-x-scroll snap-mandatory snap-always py-6 px-4`}
            id="artistsContainer"
          >
            {artistUrls.map(({ id, name, url, desc, profilepic }) => (
              <motion.div
                key={id}
                className="relative w-96 my-4 mx-2 md:mx-4 scroll-mx-0 h-80 mb-36 "
                animate={{ rotateY: flippedCards[id] ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute backface-hidden snap-center "
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Card
                    className="rounded-md bg-utd-navy h-fit md:mx-0 w-80 md:w-96 shadow-lg"
                    isBlurred={false}
                    isFooterBlurred={false}
                  >
                    <CardHeader>
                      <h3 className="md:text-tiny text-xl uppercase font-bold text-utd-blue">
                        {name}
                      </h3>
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
                        role="button"
                        aria-label="view spotify embed"
                        onClick={() => handleCardClick(id)}
                      ></i>
                    </CardFooter>
                  </Card>
                </motion.div>
                <motion.div
                  className="relative rounded-md backface-hidden snap-mandatory snap-always"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Card className="rounded-md bg-utd-navy shadow-lg h-full w-80 sm:w-96 snap-mandatory snap-always">
                    {" "}
                    <CardBody className="h-fit py-8">
                      {" "}
                      <iframe
                        className="m-0"
                        src={url}
                        width="100%"
                        height="352"
                        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
                        loading="lazy"
                        alt={name}
                        title={name}
                        allowtransparency="true"
                        style={{ borderRadius: "16px" }}
                        sandbox="allow-scripts allow-same-origin"
                      ></iframe>
                    </CardBody>
                    <CardFooter>
                      {" "}
                      <i
                        className="fa-solid fa-arrow-rotate-left cursor-pointer text-3xl transition ease-in-out hover:scale-110"
                        role="button"
                        aria-label="back arrow"
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
