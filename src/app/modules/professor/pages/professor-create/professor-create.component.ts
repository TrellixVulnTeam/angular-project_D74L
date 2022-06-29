import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorDetalhado } from '../../models/professor.model';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.scss']
})
export class ProfessorCreateComponent implements OnInit {

  professor = {} as ProfessorDetalhado;
  
  constructor(private professorService: ProfessorService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  salvarController() {
    this.professorService.salvarService(this.professor)
    .then(result => {
      console.log(`Professor ${result?.nome} cadastrado com sucesso.`);
      this.professor = {} as ProfessorDetalhado;

      this.router.navigate(['professor/list']);

    });
  }

}
