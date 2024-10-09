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
    url: "https://open.spotify.com/embed/artist/244AFgFclA9c1IcjWOAqoV?utm_source=oembed",
    desc: `Experimental folk songwriter and producer, blending Irish and world music influences. Rumbling, brooding, powerful and magnetic.`,
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb1880d6870342b00559f0170c",
  },

  {
    id: 2,
    name: "Arborist",
    url: "https://open.spotify.com/embed/artist/73NsXu8p63LKM2s24QwxAr?utm_source=oembed",
    desc: "The moniker of Northern Irish singer-songwriter Mark McCambridge, known for his poignant and evocative folk music.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb2475d12d8b3a823b1e4cf8a2",
  },
  {
    id: 3,
    name: "Arliston",
    url: "https://open.spotify.com/embed/artist/1zdjZcUSe5thcIAIU5NRYh?utm_source=oembed",
    desc: "London-based band known for their atmospheric sound, emotive lyrics, cerebral songwriting and soaring instrumentals.",
    profilepic:
      "https://i.scdn.co/image/ab67616100005174a8078f6d93d0860f90642fda",
  },
  {
    id: 5,
    name: "Roe",
    url: "https://open.spotify.com/embed/artist/6ZgfyJzSGlummUBhUK1hxw?utm_source=oembed",
    desc: "Alt-pop singer-songwriter from Derry, known for her distinctive blend of indie-pop and electronic music.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb9f46765573bb835eec6d7fd2",
  },
  {
    id: 6,
    name: "Junk Drawer",
    url: "https://open.spotify.com/embed/artist/5t4EvkMzfu9IJui3iiL2Rs?utm_source=oembed",
    desc: "Incorporating Krautrock, post-punk, and psychedelia, Belfast's Junk Drawer offer an intuitively loose and idiosyncratic brand of indie rock.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb8379b43f58078bbab58d3df4",
  },

  {
    id: 7,
    name: "Oh Boland",
    url: "https://open.spotify.com/embed/artist/2HmnALl2GrcNUuI9C5visw?utm_source=oembed",
    desc: "Three-piece band from Tuam Co. Galway. Self-described “poppy but sloppy” rock‘n’roll defined by their buzzsaw guitar tone.",
    profilepic:
      "https://i.scdn.co/image/ab67616d0000b27372c3bb31f19b72b9e855f3cd",
  },
  {
    id: 8,
    name: "Brand New Friend",
    url: "https://open.spotify.com/embed/artist/7iWAQPQTaX1BV0IYFbxKoU?utm_source=oembed",
    desc: "North Coast indie pop powerhouses. Haunting and heavy production complementing sweet melodies and soaring choruses.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb9f6ce86296b108c89af964a7",
  },
  {
    id: 9,
    name: "Ben Traill",
    url: "https://open.spotify.com/embed/artist/2md5CaM27EV4MySPaSUkgT?utm_source=oembed",
    desc: "Singer-songwriter blending catchy hooks and choruses with expressive and confessional storytelling.",
    profilepic: "/bent.jpeg",
  },
  {
    id: 10,
    name: "Susie Blue",
    url: "https://open.spotify.com/embed/artist/0CixME0zpIWI1vHtsqXzuP?utm_source=oembed",
    desc: "Irish queer indie pop artist with Glastonbury and Electric Picnic performances.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb37206bf6a97f43bb00ec051d",
  },
  {
    id: 11,
    name: "Blue Whale",
    url: "https://open.spotify.com/embed/artist/6rUPywdqRWwwFTayo3qS9b?utm_source=oembed",
    desc: "Fierce and playful four-piece band with math-rock and jazz influences.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb86519a66d27aeebc4a5f0b67",
  },
  {
    id: 12,
    name: "Neil Brogan",
    url: "https://open.spotify.com/embed/artist/1y6WMOklpc7zkhPiXZHIhY?utm_source=oembed",
    desc: "Indie-pop with self-deprecating efficacy and contrasting jangly exuberance. Known for his previous project Sea Pinks.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5ebfe9c0dbb1b510e2e5f7dfee7",
  },
  {
    id: 13,
    name: "Demi O'Hara",
    // url: "https://www.youtube.com/embed/x_OL9RXiN_w",
    url: "",
    desc: "Irish acoustic artist.",
    profilepic: "/demiohara.jpg",
  },
  {
    id: 14,
    name: "RUÁ",
    url: "https://open.spotify.com/embed/artist/6uoAnlpghz95IDY0fS6ZKZ?utm_source=oembed",
    desc: "Derry-born RUÁ's honest, stripped-back songs take you to a homely, firelit backroom of some other place and time.",
    profilepic:
      "https://i.scdn.co/image/ab676161000051747203a2399920c08b6798a6f6",
  },
  {
    id: 15,
    name: "Ciara O'neill",
    url: "https://open.spotify.com/embed/artist/1zdL1XmVZSfVkPRHYnCcM9?utm_source=oembed",
    desc: "Belfast based indie folk singer songwriter and RTÉ Radio 1 folk award nominee. Beautiful vocals and raw, poetic songwriting.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5eb1b8643997b90139ef33df102",
  },
  {
    id: 16,
    name: "Garrett Laurie",
    url: "https://open.spotify.com/embed/artist/3jD6O6BSzy6BZOCbALVt3Y?utm_source=oembed",
    desc: "A unique brand of mesmerising, vocally driven alt-folk, showcasing an impressive vocal range with masterful precision.",
    profilepic:
      "https://i.scdn.co/image/ab6761610000e5ebea9130f7b5044bb3577c5cf2",
  },
  {
    id: 17,
    name: "Two Step Trust (4MN, Dano Soprano)",
    url: "https://www.instagram.com/twosteptrust/embed/?cr=1&amp;v=13&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2Fnews#%7B%22ci%22%3A0%2C%22os%22%3A1224.699999988079%2C%22ls%22%3A406.5%2C%22le%22%3A654.7999999523163%7D",
    desc: "Late night DJ set with 4MN and Dano Soprano.",
    profilepic: "/twosteptrust.jpg",
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
      <div className="header-container">
        <h2
          className="font-extrabold py-4 text-4xl uppercase cursor-pointer flex items-center transition ease-in-out delay-10 hover:scale-110"
          id="artists-div"
        >
          Line-up
        </h2>
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
                className="relative w-96 my-4 mx-2 md:mx-4 scroll-mx-0 h-80 mb-36"
                animate={{ rotateY: flippedCards[id] ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="absolute snap-center"
                  style={{
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Card className="rounded-md bg-utd-navy h-fit md:mx-0 w-80 md:w-96 shadow-lg">
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
                  className="relative rounded-md snap-mandatory snap-always"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
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
                        allow="encrypted-media;"
                        allowFullScreen
                        loading="lazy"
                        alt={name}
                        title={name}
                        style={{
                          borderRadius: "16px",
                          backfaceVisibility: "hidden",
                        }}
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
