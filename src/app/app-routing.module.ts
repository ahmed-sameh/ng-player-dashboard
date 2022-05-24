import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HostsComponent } from './hosts/hosts.component';
import { UsersComponent } from './users/users.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'hosts', component: HostsComponent},
  {path: 'website', component: WebsiteComponent},
  {path:'', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
