"use client";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import Image from "next/image";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobieNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
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
                 </div>  
                 <nav className='flex flex-col justify items-center gap-8'>
  {links.map((link, index) => {
                                return (
                                            <Link
                                                href={link.path}
                                                key={index}
                                                className={`${
                                                link.path === pathname && "text-accent border-b-2 border-accent"
                                                } text-xl capitalize hover:text-accent transition-all`}
                                            >
                                                {link.name}
                                            </Link>
                                );
                            })}
                            </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobieNav;