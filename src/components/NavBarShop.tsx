import { NavLink } from "react-router";

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
    <nav className="flex justify-end items-center">
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
      </ul>
    </nav>
  );
};

export default NavBarShop;
