"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

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
      {session?.data && <Link href="/profile">Profile</Link>}

      {session?.data ? (
        //Tips redirect to home after click  
        <Link href="#" onClick={() => signOut({callbackUrl: '/'})}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </>
  );
};

export { Navigation };
