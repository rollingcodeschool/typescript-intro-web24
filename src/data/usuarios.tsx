export interface Usuario {
  id: number;
  correo: string;
  password: string;
  rol: string;
}

export const usuarios: Usuario[] = [
  {
    id: 1,
    correo: "admin@correo.com",
    password: "123456",
    rol: "admin",
  },
  {
    id: 2,
    correo: "usuario@correo.com",
    password: "pass123",
    rol: "user",
  },
  {
    id: 3,
    correo: "test@correo.com",
    password: "abcd1234",
    rol: "tester",
  },
];
