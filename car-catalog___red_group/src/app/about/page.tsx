import { FC } from "react";
import { Layout } from "@/components";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About | Car catalog',
}

export default function About() {
  return <Layout >About</Layout>;
}
