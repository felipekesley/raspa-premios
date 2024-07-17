import { Crown, Flame, House } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { href: "/", title: "Home", Icon: House },
  { href: "/", title: "Flame", Icon: Flame },
  { href: "/", title: "Crown", Icon: Crown },
];

export const NavBar = () => {
  return (
    <nav className="fixed bg-appPrimary-300 p-2 rounded-full w-full max-w-[344px] lg:max-w-[400px] left-1/2 translate-x-[-50%] bottom-6">
      <ul className="flex items-center justify-between gap-4">
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              title={item.title}
              className="w-16 h-16 flex justify-center items-center bg-gradient-to-b from-appFourth-400 to-appSecondary-400 rounded-full shadow-xl text-white"
            >
              <item.Icon strokeWidth={1} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
