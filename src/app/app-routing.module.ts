import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'forgotpass', loadChildren: () => import('./pages/forgotpass/forgotpass.module').then(m => m.ForgotpassModule) },
  { path: 'forgotpass-message', loadChildren: () => import('./pages/forgotpass-message/forgotpass-message.module').then(m => m.ForgotpassMessageModule) },
  { path: 'resetpass', loadChildren: () => import('./pages/resetpass/resetpass.module').then(m => m.ResetpassModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'sport', loadChildren: () => import('./pages/sport/sport.module').then(m => m.SportModule) },
  { path: 'match/:id', loadChildren: () => import('./pages/match/match.module').then(m => m.MatchModule) },
  { path: 'championship', loadChildren: () => import('./pages/championship/championship.module').then(m => m.ChampionshipModule) },
  { path: 'team', loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
