import { Component, OnInit } from '@angular/core';
import { StatResultsService } from '../stat-results.service';

@Component({
  selector: 'app-stat-results',
  templateUrl: './stat-results.component.html',
  styleUrls: ['./stat-results.component.css']
})
export class StatResultsComponent implements OnInit {

  listaJogosAnalisados = [];

  constructor(private statResultsService: StatResultsService) { }

  ngOnInit() {
    this.getListaDeJogosAnalisados()
  }

  getListaDeJogosAnalisados(){
    this.statResultsService.getListaJogosAnalisados()
    .subscribe(
      listaJogosAnalisados => console.log(listaJogosAnalisados)
      );
  }
  

}
