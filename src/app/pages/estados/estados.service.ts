import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(
  ) { }

  getCidades() {
    return [{
      id: 'tNeZBY1TLc31gnU9hDMn',
      estado: 'rio grande do sul',
      foto: 'https://cdn.pixabay.com/photo/2017/12/30/09/07/woman-3049571__340.jpg',
      nome: 'porto alegre',
      descricao: 'Acompahantes RS na cidade de Porto Alegre',
    },
    {
      id: '4ZEeZ0dhwLZNfmVcjTQ6',
      descricao: 'Acompahantes RS na cidade de Canoas',
      estado: 'rio grande do sul',
      nome: 'canoas',
      foto: 'https://cdn.pixabay.com/photo/2016/10/13/00/03/girl-1736419__340.jpg',
    },
    {
      id: 'Xt1PJm1p9tkd74pnIgVc',
      descricao: 'Acompahantes RS na cidade de Gravatai',
      foto: 'https://cdn.pixabay.com/photo/2016/08/11/12/43/woman-1585593__340.jpg',
      estado: 'rio grande do sul',
      nome: 'gravatai',
    },
    {
      id: 'ptxidMbVl1DAQmp1CrYc',
      foto: 'https://cdn.pixabay.com/photo/2016/05/13/19/04/female-body-1390659__340.jpg',
      nome: 'cachoerinha',
      estado: 'rio grande do sul',
      descricao: 'Acompahantes RS na cidade de Cachoerinha',
    },
    {
      id: 'WaFPsFVmdJvyW9MCwjUc',
      estado: 'rio grande do sul',
      foto: 'https://cdn.pixabay.com/photo/2017/12/18/14/07/woman-3026201__340.jpg',
      descricao: 'Acompahantes RS na cidade de Alvorada',
      nome: 'alvorada',
    },
    {
      id: 'prbN5qTaJACwCy5o0dCu',
      estado: 'rio grande do sul',
      nome: 'viamao',
      foto: 'https://cdn.pixabay.com/photo/2017/08/10/01/19/woman-2616801__340.jpg',
      descricao: 'Acompahantes RS na cidade de Viamao',
    },
    {
      id: 'rgzzFkIa3hBtuffnEA91',
      nome: 'sao leopoldo',
      descricao: 'Acompahantes RS na cidade de Sao Leopoldo',
      foto: 'https://cdn.pixabay.com/photo/2018/01/05/07/05/people-3062246__340.jpg',
      estado: 'rio grande do sul',
    },
    {
      id: 'hzZQ7DxozWaAR58bdMNQ',
      descricao: 'Acompahantes RS na cidade de Novo Hamburgo',
      nome: 'novo hamburgo',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/576/5766736.jpg',
      estado: 'rio grande do sul',
    },
    {
      id: 'hzZQ7DxozWaAR58bdMNQ',
      descricao: 'Acompahantes RS na cidade de Lageado',
      nome: 'lageado',
      foto: 'https://cdn.pixabay.com/photo/2017/05/22/07/20/woman-2333327__340.jpg',
      estado: 'rio grande do sul',
    },
    {
      id: '2MCkuHUa9La4ey7SonZh',
      nome: 'caxias do sul',
      descricao: 'Acompahantes RS na cidade de Caxias do Sul',
      estado: 'rio grande do sul',
      foto: 'https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg',
    },
    {
      id: '3xjv7o0BrvlsVF4LfQwq',
      estado: 'rio grande do sul',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/1018/10182731.jpg',
      descricao: 'Acompahantes RS na cidade de Gramado',
      nome: 'gramado',
    },
    {
      id: 'a01KZDgU9aCIUS51QCK1',
      estado: 'rio grande do sul',
      foto: 'https://cdn.pixabay.com/photo/2016/03/15/17/17/girl-1258739__340.jpg',
      descricao: 'Acompahantes RS na cidade de Bento Goncalves',
      nome: 'bento goncalves',
    },
    {
      id: '3xjv7o0BrvlsVF4LfQwq',
      estado: 'rio grande do sul',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/576/5766939.jpg',
      descricao: 'Acompahantes RS na cidade de Farroupilha',
      nome: 'farroupilha',
    },
    {
      id: '3xjv7o0BrvlsVF4LfQwq',
      estado: 'rio grande do sul',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/1017/10177435.jpg',
      descricao: 'Acompahantes RS na cidade de Passo Fundo',
      nome: 'passo fundo',
    },
    {
      id: '3xjv7o0BrvlsVF4LfQwq',
      estado: 'rio grande do sul',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/576/5766961.jpg',
      descricao: 'Acompahantes RS na cidade de Santa Cruz do Sul',
      nome: 'santa cruz do sul',
    },
    {
      id: 'qQmCChWeSI1hIz40M1qT',
      foto: 'https://cdn.pixabay.com/photo/2016/11/29/10/25/adult-1869008__340.jpg',
      nome: 'pelotas',
      descricao: 'Acompahantes RS na cidade de Pelotas',
      estado: 'rio grande do sul',
    },
    {
      id: 'qQmCChWeSI1hIz40M1qT',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/979/9795031.jpg',
      nome: 'rio grande',
      descricao: 'Acompahantes RS na cidade de Rio Grande',
      estado: 'rio grande do sul',
    },
    {
      id: 'qQmCChWeSI1hIz40M1qT',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/240/2404666.jpg',
      nome: 'bage',
      descricao: 'Acompahantes RS na cidade de Bage',
      estado: 'rio grande do sul',
    },

    {
      id: '3xjv7o0BrvlsVF4LfQwq',
      estado: 'rio grande do sul',
      foto: 'https://cdn.pixabay.com/photo/2015/01/15/13/06/woman-600238__340.jpg',
      descricao: 'Acompahantes RS na cidade de Santa Maria',
      nome: 'santa maria',
    },

    {
      id: 'qQmCChWeSI1hIz40M1qT',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/909/9090259.jpg',
      nome: 'ljui',
      descricao: 'Acompahantes RS na cidade de ljui',
      estado: 'rio grande do sul',
    },
    {
      id: 'qQmCChWeSI1hIz40M1qT',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/823/8236295.jpg',
      nome: 'santo angelo',
      descricao: 'Acompahantes RS na cidade de Santo Angelo',
      estado: 'rio grande do sul',
    },
    {
      id: 'qQmCChWeSI1hIz40M1qT',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/698/6981251.jpg',
      nome: 'santana do livramento',
      descricao: 'Acompahantes RS na cidade de Santana do Livramento',
      estado: 'rio grande do sul',
    },
    {
      id: 'ptxidMbVl1DAQmp1CrYc',
      foto: 'https://cdn.olhares.com/client/files/foto/medium/600/6008779.jpg',
      nome: 'uruguaiana',
      estado: 'rio grande do sul',
      descricao: 'Acompahantes RS na cidade de Uruguaiana',
    },
  ]
  }

}
