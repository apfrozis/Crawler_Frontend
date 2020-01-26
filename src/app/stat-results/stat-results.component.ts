import { Component, OnInit, ViewChild } from '@angular/core';
import { StatResultsService } from '../stat-results.service';
import { MatDatepickerInputEvent, MatSort, MatTableDataSource } from '@angular/material';





const ELEMENT_DATA = [
  {liga: 1, equipa_casa: 'Hydrogen', equipa_fora: 1.0079, over15validation: 'H'},
  {liga: 2, equipa_casa: 'Helium', equipa_fora: 4.0026, over15validation: 'He'},
  {liga: 3, equipa_casa: 'Lithium', equipa_fora: 6.941, over15validation: 'Li'},
  {liga: 4, equipa_casa: 'Beryllium', equipa_fora: 9.0122, over15validation: 'Be'},
  {liga: 5, equipa_casa: 'Boron', equipa_fora: 10.811, over15validation: 'B'},
  {liga: 6, equipa_casa: 'Carbon', equipa_fora: 12.0107, over15validation: 'C'},
  {liga: 7, equipa_casa: 'Nitrogen', equipa_fora: 14.0067, over15validation: 'N'},
  {liga: 8, equipa_casa: 'Oxygen', equipa_fora: 15.9994, over15validation: 'O'},
  {liga: 9, equipa_casa: 'Fluorine', equipa_fora: 18.9984, over15validation: 'F'},
  {liga: 10, equipa_casa: 'Neon', equipa_fora: 20.1797, over15validation: 'Ne'},
];




@Component({
  selector: 'app-stat-results',
  templateUrl: './stat-results.component.html',
  styleUrls: ['./stat-results.component.css']
})
export class StatResultsComponent implements OnInit {

  displayedColumns: string[] = ['liga', 'equipaCasa.nomeEquipa', 'equipaFora.nomeEquipa', 'over15validation', 'over15standardDeviation', 'over25validation', 'over25standardDeviation', 'over35validation', 'over35standardDeviation', 'goalsScoredPlusConceded'];

  listaJogosAnalisados = new MatTableDataSource();

  dataFutura = true;
  varaivel = false;

  private sort: MatSort;

  @ViewChild(MatSort, {static: false}) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  constructor(private statResultsService: StatResultsService) { 
  }

  ngOnInit() {
  }

  getListaDeJogosAnalisados(data_pesquisa){
    this.statResultsService.getListaJogosAnalisados(data_pesquisa)
    .subscribe((listaJogosAnalisados) => {
      this.listaJogosAnalisados.data = listaJogosAnalisados.data;
      console.log(this.sort)
    }
      );
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>)  {
    console.log("sdffsef")
    if(event.value.setHours(0,0,0,0)<new Date().setHours(0,0,0,0)){
      this.dataFutura=false
    }else{
      this.dataFutura=true
    }
    this.getListaDeJogosAnalisados(event.value)
  }

  setDataSourceAttributes() {
    this.listaJogosAnalisados.sort = this.sort;
  }
}

