"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./Header.module.scss";

export const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link className={pathname === "/" ? styles.active : ""} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/about" ? styles.active : ""}
        href="/about"
      >
        About
      </Link>
    </header>
  );
};
