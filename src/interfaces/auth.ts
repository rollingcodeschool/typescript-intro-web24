
export type User = {
    correo:string
    id?:number,
    rol?:string
  
}
export interface AuthContextType {
  user: User;
  autentication: (correo:string, password:string) => void;
}