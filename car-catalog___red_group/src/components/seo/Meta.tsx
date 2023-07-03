import { FC, PropsWithChildren } from "react";
import { IMeta } from "./interface";
import Head from "next/head";

//NOTE в Next 13 SEO работает по другому, смотри доку

const getTitle = (title: string) => `${title} | Car catalog`;

export const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};
