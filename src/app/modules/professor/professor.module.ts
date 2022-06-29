import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorCreateComponent } from './pages/professor-create/professor-create.component';
import { GenericRouterComponent, ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorListComponent } from './pages/professor-list/professor-list.component';
import { FormsModule } from '@angular/forms';
import { ProfessorAtualizarComponent } from './pages/professor-atualizar/professor-atualizar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProfessorCreateComponent,
    ProfessorListComponent,
    ProfessorAtualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
