import Link from "next/link";
import Navigation from "./navigation";

const Headbar = () => {
  return (
    <nav className="flex h-12 w-full items-center justify-between self-center bg-stone-400 px-10 drop-shadow-lg">
      <Link href="/" className="font-serif text-xl font-bold">
        Dungeons & Dummies
      </Link>
      <Navigation />
    </nav>
  );
};

export default Headbar;
