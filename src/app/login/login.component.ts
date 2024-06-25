import { Component,  inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacionStatusServiceService } from '../servicios-compartidos/autenticacionStatus.Service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',

})
export default class LoginComponent {

  private autenticacionStatusService = inject(AutenticacionStatusServiceService);

  public terminadoAuthCheck = this.autenticacionStatusService.terminadoAuthCheck;
  public uthStatusChangedEffect = this.autenticacionStatusService.authStatusChangedEffect;

}
