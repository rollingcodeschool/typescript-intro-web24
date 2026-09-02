import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
