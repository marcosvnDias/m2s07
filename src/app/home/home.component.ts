import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Sessao {
  nome: string,
  descricao: string,
  urlImg: string,
  visibilidade: boolean
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  sessao = [{
    nome: "Próximas atividades",
    descricao: "Entrega de trabalhos e chat com mentor",
    urlImg: "../assets/entrega-atividades.jpeg",
    visibilidade: false
  }, {
    nome: "Minhas disciplinas",
    descricao: "Mostrar disciplinas do aluno para aquele semestre",
    urlImg: "../assets/minhas-disciplinas.jpeg",
    visibilidade: false
  }, {
    nome: "Cursos extras",
    descricao: "Monte sua grade curricular",
    urlImg: "../assets/img-cursos-extras.jpeg",
    visibilidade: false
  }];

  ngOnInit(): void {
  }

  mostrar(e:Sessao) {
    if (!e.visibilidade) {
        e.visibilidade = true;
    }
  }

  esconder(e:Sessao) {
    if (e.visibilidade) {
        e.visibilidade = false;
    }
  }

}
