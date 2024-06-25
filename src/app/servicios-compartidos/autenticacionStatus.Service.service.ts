import { Injectable, computed, effect, inject } from '@angular/core';
import { AuthService } from '../login/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from '../login/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionStatusServiceService {

  private authService = inject(AuthService);
  private router      = inject(Router);


  public terminadoAuthCheck = computed<boolean>( () => {
    if(this.authService.authStatus()  === AuthStatus.comprobando){
      return false;
    }

    return true;
  })

  public authStatusChangedEffect = effect( () =>{


    switch (this.authService.authStatus()) {
      case AuthStatus.comprobando:
          return;

      case AuthStatus.autenticado:
          this.router.navigateByUrl('/dashboard');
        return;

      case AuthStatus.noAutenticado:
        this.router.navigateByUrl('/auth/login')
          return;

    }
  })

}
