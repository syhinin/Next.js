import { Home } from "@/components";
import { ICarData, Api } from "@/services";

export default async function HomePage() {
  const cars = await Api.getAllCars();

  return <Home cars={cars} />;
}

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await Api.getAllCars();

//   console.log("cars__________:", cars);
//   return {
//     props: { cars },
//   };
// };
