import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    email: "",
    senha: ""
  };

  status = {
    email: "",
    senha: ""
  };

  constructor(private router: Router){

  }

  entrar() {
    this.status.email = "";
    this.status.senha = "";

    if (!this.login.email) {
      this.status.email = "error";
    } 
    
    if (!this.login.senha) {
      this.status.senha = "error";
    } 
    
    if (this.login.email && this.login.senha) {
      this.router.navigate([""]);
    }
  }

  recuperarSenha () {
    alert("Processo de recuperação de senha enviado para o e-mail cadastrado");
  }
}
