"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../buttons/Button";
import SVG from "../svg/SVG";

const links = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Portofolio", to: "/portofolio" },
  { name: "Blog", to: "/blog" },
  { name: "Contact Us", to: "/contact" },
  { name: "Export Portal", to: "/export-portal" },
  { name: "Pages", to: "/pages" },
];

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  return (
    <div className="sticky backdrop-blur-3xl top-0 z-50 border-r-0 border-l-0 border border-t-0 dark:border-gray-50/30 border-gray-300">
      <nav className="w-full max-w-7xl mx-auto mt-0 px-4 ">
        <div className="px-4 py-3 flex justify-between items-center">
          <div
            onClick={goHome}
            className="text-xl font-bold text-orange-400 tracking-wide cursor-pointer"
          >
            Coffee
          </div>

          <div className="hidden md:flex md:items-center md:space-x-0.5 gap-0.5 text-sm font-medium dark:text-gray-100 text-gray-900">
            {links.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.name}
                  href={link.to}
                  className={`transition-colors duration-200 dark:hover:text-orange-100 hover:text-orange-600 hover:bg-orange-400/20 rounded-full px-6 py-2 ${
                    isActive
                      ? "dark:text-gray-50 text-gray-950 bg-orange-400/30"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Button href="/" variant="primary" size="sm">
            <span className="mx-4">Call Us</span>
            <SVG width="25" height="25" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
