import { FC } from "react";
import Image from "next/image";
import { Metadata } from "next";

import styles from "@/app/page.module.scss";
import { Layout, CarItem } from "@/components";
import { ICarData } from "@/services";

export const metadata: Metadata = {
  title: "Home | Car catalog",
};

export const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>Hello Cars catalog</h1>
      {cars?.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <div>Cars not found!</div>
      )}
    </Layout>
  );
};
