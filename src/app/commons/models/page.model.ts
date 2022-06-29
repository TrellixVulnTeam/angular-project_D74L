export interface Pagina<T> {
    conteudo: T[];
    paginaSelecionada: number;
    proximaPagina: boolean;
    tamanhoPagina: number;
}