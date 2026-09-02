import { useState, useContext } from "react";
import type { Product } from "../interfaces/products";
import FormShop from "../components/FormShop";
import CardShop from "../components/CardShop";
import { ThemeContext } from "../context/ThemeContext";

const HomeScreen = () => {
  const context = useContext(ThemeContext);
  console.log(context?.theme);
  const [products, setProducts] = useState<Product[]>([]);

  const agregarProducto = (producto: Product): void => {
    //{id,nombre,check}
    setProducts([...products, producto]);
  };

  const actualizarProducto = (id: number): void => {
    setProducts((prod) =>
      prod.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item,
      ),
    );
  };

  const borrarProducto = (id: number) => {
    setProducts((prod: Product[]) => prod.filter((item) => item.id != id));
  };

  const pendientes: number = products.filter((item) => !item.check).length;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Lista de shopping</h1>
      <div className="w-80 mb-1">
        <FormShop agregarProducto={agregarProducto} />
      </div>
      <div>
        <span>{pendientes} Pendientes</span>
      </div>
      {products.map((item) => (
        <CardShop
          product={item}
          key={item.id}
          actualizarProducto={actualizarProducto}
          borrarProducto={borrarProducto}
        />
      ))}
      {/* Tarjetas de productos  */}
    </section>
  );
};

export default HomeScreen;
