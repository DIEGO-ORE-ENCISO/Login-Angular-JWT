import { Routes } from '@angular/router';
import { estaAutenticadoGuard } from './login/guards/esta-autenticado.guard';
import { noEstaAutenticadoGuard } from './login/guards/no-esta-autenticado.guard';

export const routes: Routes = [
  {
    path:'tienda',
    loadComponent:() => import('./Tienda/prueba.component'),
    children:[
      {
        path: 'menu',
        title:'Tienda Principal',
        loadComponent:() => import('./Tienda/pages/prueba-page/prueba-page.component'),
      },
      {
        path:'**',
        redirectTo:'menu',
      }
    ]
  },
  {
    path: 'auth',
    canActivate: [noEstaAutenticadoGuard],
    loadComponent: () => import('./login/login.component'),
    children:[
      {
        path: 'login',
        title: 'Login Formulario',
        loadComponent: () => import('./login/pages/login-form/login-form.component')
      },
      {
        path: 'register',
        title: 'Register Formulario',
        loadComponent: () => import('./login/pages/register-form/register-form.component')
      },
      {
        path:'**',
        redirectTo: 'login',
      }
    ]
  },
  {
    path:'dashboard',
    canActivate:[estaAutenticadoGuard],
    loadComponent: () => import('./dashboard/dashboard.component'),
    children:[
      {
        path:'users',
        title:'users',
        loadComponent: () => import('./dashboard/pages/usuarios-page/usuarios-page.component'),
      },
      {
        path:'**',
        redirectTo: 'users',
      }
    ]
  },
  {
    path:'**',
    redirectTo: (route) =>{
      return '/auth'
    },
    pathMatch: 'full'
  }
];
