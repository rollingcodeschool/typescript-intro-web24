import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NavBarShop from "../components/NavBarShop";
import { Outlet } from "react-router";

const LayoutScreen = () => {
  const context = useContext(ThemeContext);
  return (
    <>
      <header className={`${context?.theme === "dark" ? "dark-mode" : ""}`}>
        <NavBarShop />
      </header>
      <main
        className={`${context?.theme === "dark" ? "dark-mode" : "bg-amber-50"}`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default LayoutScreen;
