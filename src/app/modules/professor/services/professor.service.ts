import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ProfessorDetalhado, ProfessorSimples } from '../models/professor.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { Filter } from 'src/app/commons/models/filtro.model'; 

const parametrosPadrao = {
  tamanhoPagina: 5,
  paginaDesejada: 0
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient: HttpClient) { }

  salvarService(professor: ProfessorDetalhado):
    Promise<ProfessorDetalhado | undefined> {
    return this.httpClient
      .post<ProfessorDetalhado>('http://localhost:9092/api/v1/professor/', professor)
      .toPromise();
  }

  atualizarService(professor: ProfessorDetalhado):
    Promise<ProfessorDetalhado | undefined> {
    return this.httpClient
      .put<ProfessorDetalhado>(`http://localhost:9092/api/v1/professor/${professor.id}`, professor)
      .toPromise();
  }

  buscarUmProfessorService(id: number):
    Promise<ProfessorDetalhado | undefined> {
    return this.httpClient
      .get<ProfessorDetalhado>(`http://localhost:9092/api/v1/professor/${id}`)
      .toPromise();
  }

  listarService(filter?: Filter): Promise<Pagina<ProfessorSimples> | undefined> {
    const filtroFinal = !!filter?.value ? `?${filter?.key}=${filter?.value}` : '';
    const queryParams = new HttpParams({
      fromObject: {
        tamanhoPagina :  !!filter?.pageSize ? filter.pageSize : parametrosPadrao.tamanhoPagina,
        paginaDesejada:  !!filter?.wantedPage ? filter.wantedPage : parametrosPadrao.paginaDesejada
      }
    })
    return this.httpClient
      .get<Pagina<ProfessorSimples>>(`http://localhost:9092/api/v1/professor/${filtroFinal}`,
        { params: queryParams })
      .toPromise();
  }

  excluirService(id: number | undefined): Promise<any> {
    return this.httpClient
      .delete<any>(`http://localhost:9092/api/v1/professor/${id}`)
      .toPromise();
  }
}
