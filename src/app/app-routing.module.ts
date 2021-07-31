import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'additems',
    loadChildren: () => import('./additems/additems.module').then( m => m.AdditemsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'addorder',
    loadChildren: () => import('./addorder/addorder.module').then( m => m.AddorderPageModule)
  },
  {
    path: 'vieworder',
    loadChildren: () => import('./vieworder/vieworder.module').then( m => m.VieworderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
