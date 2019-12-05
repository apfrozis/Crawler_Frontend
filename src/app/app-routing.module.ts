import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatResultsComponent } from './stat-results/stat-results.component'
import { RouterModule, Routes, Router } from '@angular/router'
import { GamesDashboardComponent } from './games-dashboard/games-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/games-dashboard', pathMatch: 'full' },
  {path: 'stat-results', component: StatResultsComponent},
  {path: 'games-dashboard', component: GamesDashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
