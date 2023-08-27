import { Component, Renderer2, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MyData {
  id: number;
  name: string;
  url: string;
  visibility: string;
  homepage: string;
  description: string;
  updated_at: any;
  languages_url: any;
  languages: any;
  // outras propriedades
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit, OnInit  {
  logoGit = "https://t4.ftcdn.net/jpg/03/85/94/91/360_F_385949189_W1ydL4Z3c6Uy2OfB9rZNdbxVaIMOs16F.jpg";
  vermaisrecolher: string = 'Ver mais';
  data: MyData[] = []; // Inicializa a propriedade data com um array vazio

  // Propriedades para manipulação dos dados
  novoItem: MyData = {
    id: 0,
    name: '',
    url: '',
    visibility: '',
    homepage: '',
    description: '',
    updated_at: null,
    languages_url: '',
    languages: ''
    // outras propriedades
  };
  container: any;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private http: HttpClient) {

  }
  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.containerPrincipalProjetos');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<MyData[]>('https://api.github.com/users/juliansempre/repos').subscribe(
      async (data) => {
         this.data = data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        for (const item of data) {
          try {
            const response = await this.http.get<any>(item.languages_url).toPromise();
            item.languages = Object.keys(response);
          } catch (error) {
            console.error('Error fetching languages for item', item.name, error);
          }
        }
        this.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  apresentacaovermais() {
    if (this.container) {
      var acao1 = this.container.style.overflow === 'visible';
      var acao2 = this.container.style.height === 'auto';

      if (acao1) {
        this.renderer.setProperty(this.container, 'style', 'overflow: hidden;');
      } else {
        this.renderer.setProperty(this.container, 'style', 'overflow: visible;');
        this.vermaisrecolher = "Recolher";
      }

      if (acao2) {
        this.renderer.setProperty(this.container, 'style', 'height: 600px;');
        this.vermaisrecolher = "Ver mais";
      } else {
        this.renderer.setProperty(this.container, 'style', 'height: auto;');
      }
    }
  }


}
