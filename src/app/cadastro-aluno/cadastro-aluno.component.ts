import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface DadosAluno {
  nome?: string,
  cpf?: string,
  email?: string,
  celular?: string,
  curso?: string,
  selecionado?: boolean
}

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})
export class CadastroAlunoComponent implements OnInit {
  formCadastro!: FormGroup;
  dadosAntigo?: DadosAluno[]
  
  status = {
      nome: "",
      cpf: "",
      email: "",
      celular: "",
      curso: ""
    }
  
    constructor(private router: Router){

    }
  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required)
    });


    const dadosStore = localStorage.getItem("dadosAluno");
    if (dadosStore) {
      this.dadosAntigo = JSON.parse(dadosStore);
    }
  }

  cadastrar() {
    this.status.nome = "";
    this.status.cpf = "";
    this.status.email = "";
    this.status.celular = "";
    this.status.curso = "";
  
    if (this.formCadastro.controls["nome"].invalid) {
      this.status.nome = "error";
    }{}

    if (this.formCadastro.controls["cpf"].invalid) {
      this.status.cpf = "error";
    }

    if (this.formCadastro.controls["email"].invalid) {
      this.status.email = "error";
    }

    if (this.formCadastro.controls["celular"].invalid) {
      this.status.celular = "error";
    }

    if (this.formCadastro.valid) {
      const dados = this.formCadastro.value;
      
      if (this.dadosAntigo == null || this.dadosAntigo.length == 0) {
        localStorage.setItem("dadosAluno", JSON.stringify([dados]));
        // console.log(dados); 
      } else {
        // console.log(this.dadosAntigo)
        this.dadosAntigo.push(dados);
        // localStorage.clear()
        localStorage.setItem("dadosAluno", JSON.stringify(this.dadosAntigo));
      }


      // console.log(localStorage.getItem("dadosAluno"))
      alert("Usuário salvo com sucesso");
      this.router.navigate(["alunos"]);
    }
  }
}
