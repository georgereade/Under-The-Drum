import { Inconsolata } from "next/font/google";
import Head from "next/head";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const newsItems = [
  {
    title: "Earlybird tickets now on sale!",
    date: "13th July",
    content:
      "Under The Drum is now live! Buy before the end of July to save on tickets",
  },
  {
    title: "Follow us on Instagram",
    date: "13th July",
    content: (
      <div className="flex flex-col items-center max-w-screen">
        <p className="pb-4 text-md md:text-lg w-full">
          We are on Instagram! Go give us a follow for more news and updates on
          artists
        </p>
        <iframe
          className="instagram-media w-full md:w-1/2 bg-white rounded-xl border-2 border-black block p-0 h-96"
          id="instagram-embed-0"
          src="https://www.instagram.com/under.the.drum/embed/?cr=1&amp;v=13&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2Fnews#%7B%22ci%22%3A0%2C%22os%22%3A1224.699999988079%2C%22ls%22%3A406.5%2C%22le%22%3A654.7999999523163%7D"
          allowtransparency="true"
          allowFullScreen
          height="0"
          data-instgrm-payload-id="instagram-media-payload-0"
        ></iframe>
      </div>
    ),
  },
];

export default function News() {
  return (
    <div
      className={`flex flex-col items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${inconsolata.className} overflow-hidden sm:bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-local`}
    >
      <Head>
        <title>News | Under The Drum</title>
      </Head>
      {/* <div className="flex flex-col items-center pb-12 md:w-4/5 md:px-16"> */}
      <div className="md:w-4/5 pb-8 md:px-16 bg-utd-navy sm:px-8">
        <h1 className="text-5xl py-6 text-left">News</h1>
        {newsItems.map(({ title, date, content }, index) => (
          <div key={index} className="news-update">
            <h3 className="pt-6 text-2xl font-bold">{title}</h3>
            <p className="pb-3 text-md md:text-lg text-gray-400">{date}</p>
            <div className="text-md md:text-lg">{content}</div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
