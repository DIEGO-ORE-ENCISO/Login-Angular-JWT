import { Usuario } from "./usuario.interface";


export interface VerificarTokenResponse{
  usuario:Usuario;
  token:string;
}
