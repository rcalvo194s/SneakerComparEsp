import { Price } from "./price.model";

export interface Sneaker {
    id: string;
    imagenUrl: string;
    marca: string;
    modelo: string;
    nombre: string;
    precioBase: number;
    precios: Price[];
}
  