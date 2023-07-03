import { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { Header } from "./header";
import Footer from "./footer";

const DynamicFooter = dynamic<React.ComponentProps<typeof Footer>>(
  () => import("./footer"),
  { ssr: false }
);

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <DynamicFooter />
    </>
  );
};
