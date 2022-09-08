import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {DiscoverResultsComponent} from "./components/discover-results/discover-results.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path:'discover',
    component: DiscoverComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path:'discover/results',
    component: DiscoverResultsComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
