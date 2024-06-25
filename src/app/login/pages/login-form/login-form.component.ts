import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar para uso de html personalizado como los icons
})
export default class LoginFormComponent {

  private fb = inject(FormBuilder);
  private atuhService = inject(AuthService);
  private router =inject(Router);
  hidePassword: boolean = true;

  public myForm:FormGroup = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(4)]],
    password: ['',[Validators.required, Validators.minLength(8)]],
  })

  login(){
    const {username, password} = this.myForm.value;
    this.atuhService.login(username,password)
      .subscribe({
        next:() => this.router.navigateByUrl('/dashboard'),
        error: (mensage) =>{
          Swal.fire('Error',mensage, 'error')
        }
      })
  }

  //OCULTAR ICONO PASSWORD
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }


}
