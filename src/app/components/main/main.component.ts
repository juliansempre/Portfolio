import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(){
    this.servidor();
  }
 servidor = () => {
  console.log("Olá, mundo!");
};
}
