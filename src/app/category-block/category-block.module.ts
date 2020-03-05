import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryBlockPageRoutingModule } from './category-block-routing.module';

import { CategoryBlockPage } from './category-block.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryBlockPageRoutingModule
  ],
  declarations: [CategoryBlockPage]
})
export class CategoryBlockPageModule {}
