import type { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const noEstaAutenticadoGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router      = inject(Router);

  if(authService.authStatus() === AuthStatus.autenticado){
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
