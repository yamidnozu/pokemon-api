import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
