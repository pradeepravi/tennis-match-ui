import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchAddComponent } from './match-add/match-add.component';


const routes: Routes = [
  {
    path: 'match/add',
    component: MatchAddComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
