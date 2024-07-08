import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AlunosComponent } from './alunos/alunos.component';
import { EditAlunoComponent } from './edit-aluno/edit-aluno.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastro-aluno",
        component: CadastroAlunoComponent
    },
    {
        path: "editar-aluno",
        component: EditAlunoComponent
    },
    {
        path: "disciplinas",
        component: DisciplinaComponent
    },
    {
        path: "alunos",
        component: AlunosComponent
    }
];
