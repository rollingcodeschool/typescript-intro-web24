import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import LayoutScreen from "./layout/LayoutScreen";
import { useEffect } from "react";
import { usuarios } from "./data/usuarios";
import LoginScreen from "./views/LoginScreen";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(usuarios));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
