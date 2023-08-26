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
    this.apresentacao('Desenvolvedor Full Stack');

  }

  // Operações
  header() {
    this.logo = "assets/img/Logop.png";
    this.email = "a";
    this.linkedin = "b";
    this.github = "c";
    this.instagram = "d";
  }

  apresentacao(mensagem: string) {
    this.traco = "<b>|</b>";
    if (this.texto) {
      const textoOriginal = mensagem;
      let index = 0;
      let adding = true;

      const animate = () => {
        if (adding) {
          const newText = textoOriginal.slice(0, index + 1);
          this.renderer.setProperty(this.texto, 'innerHTML', newText + this.traco );
          index++;

          if (index > textoOriginal.length) {
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
        const newText = textoOriginal.slice(0, index - 1);
        this.renderer.setProperty(this.texto, 'innerHTML', newText + this.traco );
        index--;

        if (index <= 0) {

          adding = true;
          this.renderer.setProperty(this.texto, 'innerHTML', newText);
          setTimeout(() => {
           animate();
            //para animacao
          // clearInterval;
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
