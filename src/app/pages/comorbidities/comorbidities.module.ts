import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComorbiditiesPageRoutingModule } from './comorbidities-routing.module';

import { ComorbiditiesPage } from './comorbidities.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComorbiditiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComorbiditiesPage]
})
export class ComorbiditiesPageModule {}
