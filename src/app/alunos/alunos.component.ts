import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface DadosAluno {
  nome: string,
  cpf: string,
  email: string,
  celular: string,
  curso: string,
  selecionado: boolean
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})

export class AlunosComponent implements OnInit {
  dadosAluno: DadosAluno[];
  dadosAntigo: DadosAluno[] = [];
  statusTabela = "tabela";


  constructor(private router: Router) {
    const dadosAlunoString = localStorage.getItem("dadosAluno");
    if (dadosAlunoString) {
      this.dadosAluno = JSON.parse(dadosAlunoString);
      this.statusTabela = "tabela-com-dados";
    } else {
      this.statusTabela = "tabela";
      this.dadosAluno = [{
        nome: '',
        cpf: '',
        email: '',
        celular: '',
        curso: '',
        selecionado: false 
      }]
    }
  }

  ngOnInit(): void {
    const dadosStore = localStorage.getItem("dadosAluno");
    if (dadosStore) {
      this.dadosAntigo = JSON.parse(dadosStore);
    }
  }

  edit(e:DadosAluno) {
    e.selecionado = true;
    const dadosAtualizados = this.dadosAntigo.map((dado) => {
      if (dado.cpf == e.cpf) {
        return e;
      } else {
        return dado;
      }
    })

    // console.log(dadosAtualizados);
    localStorage.setItem("dadosAluno", JSON.stringify(dadosAtualizados));
    this.router.navigate(["editar-aluno"]);
  }

  delete(e:DadosAluno) {
    e.selecionado = true;
    let dadosAtualizados = this.dadosAluno.filter((dado) => {
      if (!dado.selecionado) {
        return true;
      } else {
        return false;
      }
    })

    localStorage.setItem("dadosAluno", JSON.stringify(dadosAtualizados));
    this.dadosAluno = dadosAtualizados;
  }

}
