import { FC } from "react";
import Image from "next/image";
import { Layout } from "@/components";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404 | Car catalog',
}

export default function Page404() {
  return (
    <Layout >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Image src="/404_1.jpg" alt="" width="500" height="500" />
      </div>
    </Layout>
  );
}
