import { useState, type SubmitEvent, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { autentication } = useContext(AuthContext);
  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const validar = autentication(correo, password);

    if (validar.ok) {
      console.log("logIn");
      navigate("/");
    } else {
      console.log("Usuario o contraseña incorrectos");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-500">
      <article className="bg-amber-100 p-5 rounded-2xl w-80">
        <h1 className="text-2xl mb-3">Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label>Correo:</label>
            <input
              className="border border-amber-600 rounded-md p-2 ring-0 outline-0"
              type="email"
              placeholder="Escribe tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Contraseña:</label>
            <input
              className="border border-amber-600 rounded-md p-2 ring-0 outline-0"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3 grid">
            <button className="bg-amber-800 rounded-md text-slate-50 px-3 py-1">
              Iniciar
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default LoginScreen;
