import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorDetalhado } from '../../models/professor.model';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-atualizar',
  templateUrl: './professor-atualizar.component.html',
  styleUrls: ['./professor-atualizar.component.scss']
})
export class ProfessorAtualizarComponent implements OnInit {

  professor = {
    
  } as ProfessorDetalhado;

  constructor(private activedRoute: ActivatedRoute,
    private professorService: ProfessorService,
    private routeNavigate: Router) {
      
     }

  ngOnInit(): void {
    
    const id = this.activedRoute.snapshot.params['id'];
    this.carregaProfessor(id); 
  }

  carregaProfessor(id: number) {
    this.professorService.buscarUmProfessorService(id)
    .then(result => {
      this.professor = !!result ? result : {} as ProfessorDetalhado;
    })
  }

  salvarController() {
    this.professorService.atualizarService(this.professor)
    .then(() => {
      this.routeNavigate.navigate(['professor/list']);
    })

  }

}
