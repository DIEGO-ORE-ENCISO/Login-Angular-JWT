import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { AuthStatus } from '../../interfaces';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class RegisterFormComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  public myForm:FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    apellido: ['', [Validators.required, Validators.minLength(1)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
  })



  register(){

    this.authService.register(this.myForm.value)
      .subscribe({
        next: () =>{

          //TODO:PONER EL AuthStatus en comprobando para que no redirija al /dashboard
          this.authService['_authStatus'].set(AuthStatus.comprobando);

          Swal.fire({
            icon: "success",
            title: `Se ha registrado su cuenta correctamente`,
            showConfirmButton: true,
            confirmButtonText: 'OK'
          }).then((result) =>{
            if(result.isConfirmed){
              //TODO:PONER EL AuthStatus en autenticado para que nos redirija al /dashboard una vez dado click en OK
              this.authService['_authStatus'].set(AuthStatus.autenticado);
            }else {
              // Si se cierra sin confirmar, también establece el estado de autenticación
              this.authService['_authStatus'].set(AuthStatus.autenticado);
            }
          });
        },
        error: (message) =>{
          Swal.fire('Error', message, 'warning')
         }
      })
  }

}
