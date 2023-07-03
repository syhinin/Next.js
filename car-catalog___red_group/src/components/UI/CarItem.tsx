import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CarItem.module.scss";

import { ICarDataSingle } from "@/services";

export const CarItem: FC<ICarDataSingle> = ({ car }) => {
  return (
    <div className={styles.item}>
      <Image src={car.image} alt={car.name} width={400} height={400} />
      <h2>Name: {car.name}</h2>
      <small>Price: {car.price}</small>

      <Link href={`/car/${car.id}`}>Read more</Link>
    </div>
  );
};
