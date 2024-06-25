import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacionStatusServiceService } from '../servicios-compartidos/autenticacionStatus.Service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

   //! NOTA: No es necesario inyectar el servicio 'AutenticacionStatusServiceService' aquí,
  //! porque ya está registrado como un singleton global con @Injectable({ providedIn: 'root' }).
  //! Esto significa que cualquier cambio en el estado de autenticación y los efectos
  //! definidos en el servicio se aplicarán automáticamente a toda la aplicación,
  //! incluyendo este componente.

  //TODO: Sin embargo, como buena práctica, podríamos inyectarlo para tener claridad sobre
  //* las dependencias del componente y facilitar el mantenimiento futuro. Esto también
  //* permite un acceso directo a las propiedades y métodos del servicio si fuera necesario.
  //TODO: COMO BUENA PRACTICA LO DEJO AQUI PARA SABER QUE TAMBIEN AFECTA AQUI!
  private autenticacionStatusService = inject(AutenticacionStatusServiceService);

  public terminadoAuthCheck = this.autenticacionStatusService.terminadoAuthCheck;
  public uthStatusChangedEffect = this.autenticacionStatusService.authStatusChangedEffect;

}
