import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {
mensagemtexto: string = '';
constructor(){
  this.mensagemrodape();
}


mensagemrodape(){

const data = new Date();
const ano = data.getFullYear();
console.log(ano);
this.mensagemtexto = "Portfólio Julian Silva " + ano +" ©."
}
}
