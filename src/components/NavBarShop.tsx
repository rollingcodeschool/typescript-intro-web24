import { NavLink } from "react-router";
import ButtonTheme from "./ButtonTheme";

const NavBarShop = () => {
  const items = [
    {
      id: 1,
      path: "/",
      text: "Lista",
    },
    {
      id: 2,
      path: "/about",
      text: "Sobre nosotros",
    },
  ];
  return (
    <nav className="flex justify-end items-center me-3">
      <ul className="flex gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li>
          <ButtonTheme />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarShop;
