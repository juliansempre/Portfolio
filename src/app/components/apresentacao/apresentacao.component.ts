import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements AfterViewInit {
//Atributo
shapefoto: any;
titulo: any;
mensagem: any;
//Contrutores
constructor(private renderer: Renderer2, private elementRef: ElementRef){
this.shapefoto = "assets/img/fotojulianshape.png";
this.textoTela();
}
//Operações

ngAfterViewInit() {

}
textoTela(){
const texto: string[] = [
  'Olá! Eu sou o Julian.',
  `Fascinado por tecnologia, brasileiro nascido em 1992.
  Estou cursando Análise e Desenvolvimento de Sistemas.
  Sou alguém que abraça entusiasticamente desafios,
  assim como todo programador, porém, tenho um apreço
  especial por aqueles que me conduzem para fora da
  minha zona de conforto. Afinal, foi justamente ao
  enfrentar esses desafios que experienciei os maiores
  saltos em minha jornada de crescimento e conhecimento.
  Estou empenhado em minha jornada estudantil, buscando
  sabedoria nas plataformas de mídia digital. Nos meus
  momentos de descontração, aprecio assistir a filmes
  e séries, e também tenho grande prazer em frequentar
  a academia para cuidar do meu bem-estar físico.`
];

this.titulo = texto[0];
this.mensagem = texto[1];
}
}
