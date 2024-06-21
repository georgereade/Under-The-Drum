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
      <div className="flex flex-col items-center">
        <p>
          We are on Instagram! Go give us a follow for more news and updates on
          artists
        </p>
        <div
          className="md:w-1/2 py-6"
          dangerouslySetInnerHTML={{
            __html: `
          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/under.the.drum/" data-instgrm-version="13" style="background:#FFF; border:0; margin: 1px; padding:0; width:100%;"></blockquote>
          <script async defer src="//www.instagram.com/embed.js"></script>
        `,
          }}
        />
      </div>
    ),
  },
];

export default function News() {
  return (
    <div
      className={`flex flex-col items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${bitter.className} min-h-full`}
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
