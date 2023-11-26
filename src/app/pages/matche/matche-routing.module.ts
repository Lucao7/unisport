import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatcheComponent } from './matche.component';

const routes: Routes = [{ path: '', component: MatcheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatcheRoutingModule { }
