import Image, { StaticImageData } from "next/image";

type HeroProps = {
  imgLink: StaticImageData;
  altText: string;
  title: string;
};

const Hero = (props: HeroProps) => {
  return (
    <div className="relative">
      <Image
        className="h-screen w-screen"
        src={props.imgLink}
        alt={props.altText}
      />
      <h2 className="absolute top-1/2 left-1/2 bg-black p-5 text-white rounded-md transform -translate-x-1/2 -translate-y-1/2">
        {props.title}
      </h2>
    </div>
  );
};

export default Hero;
