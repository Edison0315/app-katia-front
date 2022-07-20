import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'care-plan',
    loadChildren: () => import('./pages/care-plan/care-plan.module').then( m => m.CarePlanPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'medicines',
    loadChildren: () => import('./pages/medicines/medicines.module').then( m => m.MedicinesPageModule)
  },
  {
    path: 'comorbidities',
    loadChildren: () => import('./pages/comorbidities/comorbidities.module').then( m => m.ComorbiditiesPageModule)
  },
  {
    path: 'files',
    loadChildren: () => import('./pages/files/files.module').then( m => m.FilesPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./pages/alerts/alerts.module').then( m => m.AlertsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
