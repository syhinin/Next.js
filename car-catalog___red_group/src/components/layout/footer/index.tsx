"use client";

import { FC, PropsWithChildren } from "react";
import styles from "./Footer.module.scss";

const Footer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className={styles.footer}>Car Catalog | &copy; 2023</div>;
};

export default Footer;
