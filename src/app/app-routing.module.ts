import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./category-block/category-block.module').then( m => m.CategoryBlockPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./category-block/category-block.module').then( m => m.CategoryBlockPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('./ionic/ionic.module').then( m => m.IonicPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
