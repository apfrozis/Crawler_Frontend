import { Component, OnInit } from '@angular/core';

import { GamesDashboardService } from '../games-dashboard.service';

@Component({
  selector: 'app-games-dashboard',
  templateUrl: './games-dashboard.component.html',
  styleUrls: ['./games-dashboard.component.css']
})
export class GamesDashboardComponent implements OnInit {

  constructor(private _gamesDashboardService: GamesDashboardService) { }

  dashboardMetrics =  {numeroDeJogos: '100',
   sucessoPositivo15: '100',
    insucessoPositivo15: '100',
    sucessoNegativo15: '100',
    insucessoNegativo15: '100',
    sucessoPositivo25: '100',
    insucessoPositivo25: '100',
    sucessoNegativo25: '100',
    insucessoNegativo25: '100',
    sucessoPositivo35: '100',
    insucessoPositivo35: '100',
    sucessoNegativo35: '100',
    insucessoNegativo35: '100',
}

  ngOnInit() {
    
    //this.getDashdoardMetrics();
  }

  getDashdoardMetrics(){
   /* this._gamesDashboardService.getDashdoardMetrics()
    .subscribe(
      dashboardMetrics => this.dashboardMetrics = dashboardMetrics
      );*/
  }

}
