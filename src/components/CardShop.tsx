import type { Product } from "../interfaces/products";

//defino el tipo de los props
type CardProps = {
  product: Product;
  actualizarProducto: (id: number) => void;
  borrarProducto: (id: number) => void;
};
const CardShop = ({
  product,
  actualizarProducto,
  borrarProducto,
}: CardProps) => {
  //asignamos el tipo de las props
  const { nombre, id, check } = product;
  return (
    <article className="mt-3 bg-slate-50 rounded-md border-0 w-80 p-2 flex justify-between h-15 items-center transition hover:scale-105 shadow-md">
      <span className={check ? "line-through" : ""}>
        {nombre.toUpperCase()}
      </span>
      <div className="flex gap-2 justify-center">
        <form>
          <input
            type="checkbox"
            className="size-5 cursor-pointer rounded-md border-2 border-slate-300 accent-emerald-500 transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-emerald-500"
            checked={check}
            onChange={() => actualizarProducto(id)}
          />
        </form>
        <button
          className="border-2 size-5 bg-red-600 border-red-600 flex justify-center items-center hover:scale-110 transition"
          onClick={() => borrarProducto(id)}
        >
          <span className="text-red-50">X</span>
        </button>
      </div>
    </article>
  );
};

export default CardShop;
