import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

// INFO: Importing the components
import Navbar from "./Nav";
import MobileNavbar from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Pethum Sandaruwan"
            width={40}
            height={40}
            className=""
          />
          <h1 className="text-4xl font-semibold">
            ethum<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="items-center hidden gap-8 xl:flex">
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;