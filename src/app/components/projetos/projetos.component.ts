import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit {

  container: any;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }
  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.containerPrincipalProjetos');
    this.apresentacao();
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
      this.renderer.setProperty(this.container, 'innerHTML', cardprojeto);
    }
  }
}
