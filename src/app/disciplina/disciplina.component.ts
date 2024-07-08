import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface DadosCurso {
  nome: string,
  nomeAluno: string,
  semestre1: Semestre,
  semestre2: Semestre,
  semestre3: Semestre
}

interface Semestre {
  materia1: string,
  materia2: string,
}

interface DadosAluno {
  nome?: string,
  cpf?: string,
  email?: string,
  celular?: string,
  curso?: string | DadosCurso,
  selecionado?: boolean
}

@Component({
  selector: 'app-disciplina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplina.component.html',
  styleUrl: './disciplina.component.css'
})
export class DisciplinaComponent implements OnInit {
  dadosAntigo: DadosAluno[] = [];
  disciplinasAluno: DadosCurso[] = [];
  
  ngOnInit(): void {
    const dadosStore = localStorage.getItem("dadosAluno");
    if (dadosStore) {
      this.dadosAntigo = JSON.parse(dadosStore);
    }

    console.log(this.dadosAntigo)
    const dadosAtualizados = this.dadosAntigo.map((dado) => {
      let nomeCurso = '' + dado.curso;
      let dadoNovo = this.atribuirDiciplinasPorNome(nomeCurso, dado);
      return dadoNovo;
    });

    this.disciplinasAluno = dadosAtualizados.map((dado) => dado.curso as DadosCurso);
    this.dadosAntigo = dadosAtualizados;
  }

  atribuirDiciplinasPorNome(nomeCurso: string, dado:DadosAluno) {
    switch (nomeCurso) {
      case "front-end":
        const semestreFront1:Semestre = {
          materia1: "Teoria das cores",
          materia2: "HTML e CSS",
        }

        const semestreFront2:Semestre = {
          materia1: "JS básico",
          materia2: "JS intermediário",
        }

        const semestreFront3:Semestre = {
          materia1: "JS avançado",
          materia2: "Angular 18",
        }

        if (dado.nome) {
          const disciplinaFront:DadosCurso = {
            nome: nomeCurso,
            nomeAluno: dado.nome,
            semestre1: semestreFront1,
            semestre2: semestreFront2,
            semestre3: semestreFront3
          }

        dado.curso = disciplinaFront;
        }

        break;
      case "back-end":
          const semestreBack1:Semestre = {
            materia1: "Lógica de programação",
            materia2: "Introdução a banco de dados",
          }
  
          const semestreBack2:Semestre = {
            materia1: "Modelagem de banco de dados",
            materia2: "PostgresSQL",
          }
  
          const semestreBack3:Semestre = {
            materia1: "Java",
            materia2: "Sping Boot",
          }
          
          if (dado.nome) { 
            const disciplinaBack:DadosCurso = {
              nome: nomeCurso,
              nomeAluno: dado.nome,
              semestre1: semestreBack1,
              semestre2: semestreBack2,
              semestre3: semestreBack3
            }
    
            dado.curso = disciplinaBack;
          }
        break;
      case "fullStack":
        const semestreFull1:Semestre = {
          materia1: "Lógica de programação",
          materia2: "Teoria das cores",
        }

        const semestreFull2:Semestre = {
          materia1: "Modelagem de banco de dados",
          materia2: "HTML e CSS",
        }

        const semestreFull3:Semestre = {
          materia1: "Javascript",
          materia2: "Java",
        }

        if (dado.nome) {
          const disciplinaFull:DadosCurso = {
            nome: nomeCurso,
            nomeAluno: dado.nome,
            semestre1: semestreFull1,
            semestre2: semestreFull2,
            semestre3: semestreFull3
          }
  
          dado.curso = disciplinaFull;
        }
    }

    return dado;
  }


}