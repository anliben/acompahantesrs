interface PostInterface {
  imagePost: string;
}
export interface AnunciantesInterface {
  id: string;
  nome: string;
  foto: string;
  descricao: string;
  email: string;
  telefone: string;
  idade: number;
  cidade: string;
  estado: string;
  cache: string;
  pagamento: string;
  horario: string;
  regiao: string;
  imageProfile: string;
  imageBanner: string;
  posts: PostInterface[];
  stars: number;
}
