import { Component, Renderer2, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MyData {
  id: number;
  name: string;
  url: string;
  visibility: string;
  homepage: string,
  description: string
  // outras propriedades
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit, OnInit  {
  logoGit = "https://t4.ftcdn.net/jpg/03/85/94/91/360_F_385949189_W1ydL4Z3c6Uy2OfB9rZNdbxVaIMOs16F.jpg";
  data: MyData[] = []; // Inicializa a propriedade data com um array vazio

  // Propriedades para manipulação dos dados
  novoItem: MyData = {
    id: 0,
    name: '',
    url: '',
    visibility: '',
    homepage: '',
    description: ''
    // outras propriedades
  };
  container: any;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private http: HttpClient) {

  }
  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.containerPrincipalProjetos');
    this.apresentacao();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<MyData[]>('https://api.github.com/users/juliansempre/repos').subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log(error);
      }
    );

  }


  apresentacao() {

    //cards
    let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9mUlAqrgVEReF8bBAmLYdVzugvK_gOOnMg&usqp=CAU";
    const cardprojeto: string[] = [
      `
      <div class="card" style="width: 18rem; height: 300px; background-color: black;">
      <img class="card-img-top" src="` +img+ `" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title" style="color: white;">Card title</h5>
        <p class="card-text" style="color: white;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

      `
    ];

    if (this.container) {
    //  this.renderer.setProperty(this.container, 'innerHTML', cardprojeto);
    }
  }
}
