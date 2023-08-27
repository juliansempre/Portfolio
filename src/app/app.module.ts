import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { HttpClientModule } from '@angular/common/http';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ApresentacaoComponent,
    ProjetosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
