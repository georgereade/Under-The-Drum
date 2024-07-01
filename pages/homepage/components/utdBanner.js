import Image from "next/image";

export default function UtdBanner() {
  return (
    <div className="w-screen h-auto z-2">
      <div className="hidden md:flex flex-row">
        {" "}
        <div className="w-1/4 h-auto">
          <Image
            src="/Banner.jpg"
            alt="Under The Drum"
            width={1000}
            height={250}
            style={{ layout: "responsive", objectFit: "cover" }}
            loading="eager"
          />
        </div>
        <div className="w-1/4 h-auto">
          <Image
            src="/Banner.jpg"
            alt="Under The Drum"
            width={1000}
            height={250}
            style={{ layout: "responsive", objectFit: "cover" }}
            loading="eager"
          />
        </div>
        <div className="w-1/4 h-auto">
          <Image
            src="/Banner.jpg"
            alt="Under The Drum"
            width={1000}
            height={250}
            style={{ layout: "responsive", objectFit: "cover" }}
            loading="eager"
          />
        </div>
        <div className="w-1/4 h-auto">
          <Image
            src="/Banner.jpg"
            alt="Under The Drum"
            width={1000}
            height={250}
            style={{ layout: "responsive", objectFit: "cover" }}
            loading="eager"
          />
        </div>
      </div>

      <div className="flex flex-row md:hidden">
        {" "}
        <div className="w-1/2 h-auto">
          <Image
            src="/Banner1.png"
            className=""
            alt="Under The Drum"
            width="2500"
            height="998"
            loading="eager"
          />
        </div>
        <div className="w-1/2 h-auto">
          {" "}
          <Image
            src="/Banner1.png"
            className=""
            alt="Under The Drum"
            width="2500"
            height="998"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
