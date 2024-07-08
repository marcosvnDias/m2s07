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
  selector: 'app-edit-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-aluno.component.html',
  styleUrl: './edit-aluno.component.css'
})
export class EditAlunoComponent implements OnInit {
  formCadastro!: FormGroup;
  dadosAntigo?: DadosAluno[];
  alunoSelecionado?: DadosAluno;
  
  status = {
      nome: "",
      cpf: "",
      email: "",
      celular: "",
      curso: ""
    }
  
  constructor(private router: Router){}
  ngOnInit(): void {
    const dadosStore = localStorage.getItem("dadosAluno");
    if (dadosStore) {
      this.dadosAntigo = JSON.parse(dadosStore);
      this.dadosAntigo?.forEach((dado) => {
        if (dado.selecionado) this.alunoSelecionado = dado;
      })
    }

    this.formCadastro = new FormGroup({
      nome: new FormControl(this.alunoSelecionado?.nome, Validators.required),
      cpf: new FormControl(this.alunoSelecionado?.cpf, Validators.required),
      email: new FormControl(this.alunoSelecionado?.email, Validators.required),
      celular: new FormControl(this.alunoSelecionado?.celular, Validators.required),
      curso: new FormControl(this.alunoSelecionado?.curso, Validators.required)
    });
  }

  edit() {
    this.status.nome = "";
    this.status.cpf = "";
    this.status.email = "";
    this.status.celular = "";
    this.status.curso = "";
  
    if (this.formCadastro.controls["nome"].invalid) {
      this.status.nome = "error";
    }

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
      const dados:DadosAluno = this.formCadastro.value;
            
      if (this.dadosAntigo) {
        let dadosAtualizados = this.dadosAntigo.map(dado => {
          if (!dado.selecionado) {
            return dado;
          } else {
            return dados;
          }
       });

       this.dadosAntigo = dadosAtualizados;
      }

      localStorage.setItem("dadosAluno", JSON.stringify(this.dadosAntigo));
      alert("Usuário salvo com sucesso");
      this.router.navigate(["alunos"]);
    }
  }
}
