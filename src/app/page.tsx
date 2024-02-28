import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Img1 from "../../public/img1.jpg";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero imgLink={Img1} altText="img 1" title="Home page" />
    </div>
  );
}
