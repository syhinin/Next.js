import axios from "axios";
import { ICar } from "./interfaces";
export * from "./interfaces";

const BASE_URL = "http://localhost:4200";

axios.defaults.baseURL = BASE_URL;

export const Api = {
  async getAllCars() {
    const { data } = await axios.get<ICar[]>("/cars");

    return data;
  },
  async getCar(id: 1 | 2 | 3) {
    const { data } = await axios.get<ICar[]>(`/cars?id=${id}`);

    return data[0];
  },
};
