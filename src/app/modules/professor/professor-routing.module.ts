import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfessorCreateComponent } from './pages/professor-create/professor-create.component';
import { ProfessorListComponent } from './pages/professor-list/professor-list.component';
import { ProfessorAtualizarComponent } from './pages/professor-atualizar/professor-atualizar.component';


@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [{
  path: '',
  children: [
    { path: 'professor', redirectTo:'professor/list', pathMatch: 'full'},
    { path: 'professor/create', component: ProfessorCreateComponent },
    { path: 'professor/list', component: ProfessorListComponent },
    { path: 'professor/atualizar/:id', component: ProfessorAtualizarComponent }
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
