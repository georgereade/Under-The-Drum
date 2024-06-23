import UtdBanner from "../homepage/components/utdBanner";
import { Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });

const newsItems = [
  {
    title: "Earlybird tickets now on sale!",
    date: "22nd June",
    content:
      "Under The Drum is now live! Buy your tickets before the end of July to save £10",
  },
  {
    title: "Follow us on Instagram",
    date: "21st June",
    content: (
      <div className="flex flex-col items-center max-w-screen">
        <p>
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
      className={`flex dark flex-col items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${bitter.className} overflow-hidden`}
    >
      <UtdBanner />
      <div className="flex flex-col items-center pb-12 md:w-4/5">
        <div className="flex flex-col">
          {newsItems.map(({ title, date, content }, index) => (
            <div key={index} className="news-update">
              <h3 className="pt-6">{title}</h3>
              <p className="pb-3">{date}</p>
              <div>{content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
