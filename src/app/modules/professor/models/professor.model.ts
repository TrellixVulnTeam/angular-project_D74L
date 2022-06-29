export interface ProfessorDetalhado extends ProfessorSimples {
    sexo: string;
    titulacao: string;
    dataNascimento: Date;
}

export interface ProfessorSimples {
    id?: number;
    nome: string;
}
