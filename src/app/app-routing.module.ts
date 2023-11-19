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
  { path: 'create-team', loadChildren: () => import('./pages/team/create/create.module').then(m => m.CreateModule) },
  { path: 'list-teams', loadChildren: () => import('./pages/team/list/list.module').then(m => m.ListModule) },
  { path: 'create-championship', loadChildren: () => import('./pages/championship/create/create.module').then(m => m.CreateModule) },
  { path: 'list-championships', loadChildren: () => import('./pages/championship/list/list.module').then(m => m.ListModule) },
  { path: 'create-college', loadChildren: () => import('./pages/college/create/create.module').then(m => m.CreateModule) },
  { path: 'list-colleges', loadChildren: () => import('./pages/college/list/list.module').then(m => m.ListModule) },
  { path: 'list-users', loadChildren: () => import('./pages/user/list/list.module').then(m => m.ListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
