"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            className={isActive ? "active" : ""}
            key={`${href}+${label}`}
            href={href}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
