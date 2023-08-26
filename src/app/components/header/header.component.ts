import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  // Atributos
  logo = "";
  texto: any;
  email = "";
  linkedin = "";
  github = "";
  instagram = "";
  traco = "";
  // Construtor
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.header();
  }

  // Método executado após a visualização ser inicializada
  ngAfterViewInit() {
    this.texto = this.elementRef.nativeElement.querySelector('.texto');
    this.apresentacao();

  }

  // Operações
  header() {
    this.logo = "assets/img/Logop.png";
    this.email = "a";
    this.linkedin = "b";
    this.github = "c";
    this.instagram = "d";
  }
  link: string[] = [
    'mailto:julian_sempre@hotmail.com',
    'https://www.linkedin.com/in/julian-silva/',
    'https://github.com/juliansempre',
    'https://www.instagram.com/juliandev.webart/'
  ];

  apresentacao() {
    this.traco = "<b>|</b>";
    if (this.texto) {
      const textoOriginal: string[] = [
        'Desenvolvedor Full Stack',
        'Software Developer',
        'Apaixonado por Tecnologia',
        'Construindo Soluções Criativas'
      ];
      let index = 0;
      let adding = true;
      let messageIndex = 0; // Índice da mensagem atual

      const animate = () => {
        if (adding) {
          const newText = textoOriginal[messageIndex].slice(0, index + 1);
          this.renderer.setProperty(this.texto, 'innerHTML', newText + this.traco);
          index++;

          if (index > textoOriginal[messageIndex].length) {
            adding = false;
            setTimeout(() => {
              animateRemove();
            }, 2000);
          } else {
            setTimeout(() => {
              animate();
            }, 100);
          }
        }
      };

      const animateRemove = () => {
        const newText = textoOriginal[messageIndex].slice(0, index - 1);
        this.renderer.setProperty(this.texto, 'innerHTML', newText + this.traco);
        index--;

        if (index <= 0) {
          adding = true;
          this.renderer.setProperty(this.texto, 'innerHTML', newText);
          messageIndex = (messageIndex + 1) % textoOriginal.length; // Avança para a próxima mensagem

          setTimeout(() => {
            index = 0; // Reinicia o índice
            animate();
          }, 2000);
        } else {
          setTimeout(() => {
            animateRemove();
          }, 100);
        }
      };

      animate();
    }
  }


}
