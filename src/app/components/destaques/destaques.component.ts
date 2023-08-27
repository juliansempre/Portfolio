import { Component } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  items = [
    {
    nome: "Sistema Desktop Java",
    imagem: "https://raw.githubusercontent.com/juliansempre/Controle-de-Artes/main/img/imagem.jpg",
    descricao: "Sistema Desktop Java / JavaFX, com banco de dados para controle de serviços gráficos",
    link:"https://github.com/juliansempre/Controle-de-Artes",
    git:"https://github.com/juliansempre/Controle-de-Artes"
    },
    {
    nome: "Site para Gráfica Rápida",
    imagem: "assets/img/site.jpg",
    descricao: "Site institucional feito com React",
    link:"https://site-aerocopias.vercel.app/",
    git:"https://github.com/juliansempre/Site-Aerocopias"
    },
    {
    nome: "Jogo do Mario",
    imagem: "https://raw.githubusercontent.com/juliansempre/Jogo-do-Mario/main/game.jpg",
    descricao: "Jogo feito com javascript",
    link:"https://jogo-do-mario-two.vercel.app/",
    git:"https://github.com/juliansempre/Jogo-do-Mario"
    },
  ];
}
