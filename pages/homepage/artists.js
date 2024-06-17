const artistUrls = [
  "https://open.spotify.com/embed/artist/244AFgFclA9c1IcjWOAqoV?utm_source=generator",
  "https://open.spotify.com/embed/artist/5t4EvkMzfu9IJui3iiL2Rs?utm_source=generator",
  "https://open.spotify.com/embed/artist/3TzSVg2vePWnfYCTNo3Mx6?utm_source=generator",
  "https://open.spotify.com/embed/artist/1zdjZcUSe5thcIAIU5NRYh?utm_source=generator",
];

export default function Artists() {
  return (
    <div
      className="flex flex-col flex-wrap items-center w-screen p-4 bg-utd-grey py-12"
      id="artists"
    >
      <h2 className="font-extrabold py-4 text-4xl uppercase">Line-up 2024</h2>
      <div className="flex flex-col items-center md:flex-row">
        {" "}
        {artistUrls.map((url, index) => (
          <iframe
            key={index}
            className="m-2 w-full md:w-100"
            src={url}
            width=""
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
