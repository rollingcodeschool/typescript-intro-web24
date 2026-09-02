import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ButtonTheme = () => {
  const context = useContext(ThemeContext);

  return (
    <button
      className=" rounded-full px-2 cursor-pointer border "
      onClick={context?.toggleTheme}
    >
      <span className="text-sm">{context?.theme === "dark" ? "🌞" : "🌚"}</span>
    </button>
  );
};

export default ButtonTheme;
