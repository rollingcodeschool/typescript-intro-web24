const LoginScreen = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-500">
      <article className="bg-amber-100 p-5 rounded-2xl w-80">
        <h1 className="text-2xl mb-3">Inicio de sesión</h1>
        <form onSubmit={}>
          <div className="flex flex-col mb-2">
            <label>Correo:</label>
            <input
              className="border border-amber-600 rounded-md p-2 ring-0 outline-0"
              type="email"
              placeholder="Escribe tu correo electrónico"
              value={}
              onChange={}
            />
          </div>
          <div className="flex flex-col">
            <label>Contraseña:</label>
            <input
              className="border border-amber-600 rounded-md p-2 ring-0 outline-0"
              type="password"
              value={}
              onChange={}
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
