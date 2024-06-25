import { Injectable, computed, inject, signal } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, catchError, map, of, throwError} from 'rxjs';
import { AuthStatus, Login, Register, Usuario, VerificarTokenResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environments.baseUrl;
  private http = inject(HttpClient);

  private _curretUser = signal<Usuario | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.comprobando);

  //TODO: Al mundo exterior
  public currentUser = computed(() => this._curretUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.verificarAuthStatus().subscribe();
  }

  private setAuthentication(usuario:Usuario, token:string):boolean{
    this._curretUser.set(usuario);
    this._authStatus.set(AuthStatus.autenticado);
    localStorage.setItem('token',token);
    return true;
  }


  login(username:string, password:string):Observable<boolean>{

    const url = `${this.baseUrl}/auth/login`;
    const body = {username,password};

    return this.http.post<Login>(url,body)
      .pipe(
        map(({usuario,token}) => {
          console.log("Estado: autenticado");
          return this.setAuthentication(usuario,token)
        }),
        //! ERRORES MANEJO
        catchError(err => throwError( () => err.error.backend_mensaje))
      );

  }

  verificarAuthStatus():Observable<boolean>{
    const url = `${this.baseUrl}/auth/validar-token`;
    const token = localStorage.getItem('token');

    if(!token){
      this.logout();
      return of(false)
    }

    const headers = new HttpHeaders()
      .set('Authorization',`Bearer ${token}`);

      return this.http.get<VerificarTokenResponse>(url, {headers})
        .pipe(
          map(({usuario,token}) => this.setAuthentication(usuario,token)),

          //ERROR
          catchError(() =>{
            this._authStatus.set(AuthStatus.noAutenticado);
            return of(false);
          })
        );
  }

  logout(){
    localStorage.removeItem('token');
    this._curretUser.set(null);
    this._authStatus.set(AuthStatus.noAutenticado);
    console.log("Estado: " + this._authStatus());
  }


  register(register:Register):Observable<Register | boolean>{
    const url = `${this.baseUrl}/auth/register`;

    return this.http.post<Register>(`${url}`, register)
    .pipe(
      map(({usuario,token}) => this.setAuthentication(usuario,token)),

      //TODO : ERRORES
      catchError(err => throwError( () => err.error.backend_mensaje))
    )
  }

}
