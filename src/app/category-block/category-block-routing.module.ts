import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryBlockPage } from './category-block.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryBlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryBlockPageRoutingModule {}
