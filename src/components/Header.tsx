import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-black p-2 flex gap-6">
      <Link className="bg-green-300 px-2 py-1 rounded-md" href={"/"}>
        Home
      </Link>
      <Link className="bg-green-300 px-2 py-1 rounded-md" href={"/about"}>
        About
      </Link>
      <Link className="bg-green-300 px-2 py-1 rounded-md" href={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
