import Image from "next/image";

export default function UtdBanner() {
  return (
    <div className="hidden md:flex flex-row w-screen h-auto">
      <div className="w-1/3 h-auto">
        <Image
          src="/Banner.jpg"
          alt="Under The Drum"
          layout="responsive"
          width={500}
          height={250}
          objectFit="cover"
        />
      </div>
      <div className="w-1/3 h-auto">
        <Image
          src="/Banner.jpg"
          alt="Under The Drum"
          layout="responsive"
          width={500}
          height={250}
          objectFit="cover"
        />
      </div>
      <div className="w-1/3 h-auto">
        <Image
          src="/Banner.jpg"
          alt="Under The Drum"
          layout="responsive"
          width={500}
          height={250}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
