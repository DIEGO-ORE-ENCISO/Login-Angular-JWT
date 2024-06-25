import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../login/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule],
  templateUrl: './usuarios-page.component.html',
  styles: ``
})
export default class UsuariosPageComponent {

  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  logout(){
    this.authService.logout()
  }
}
