import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarePlanPageRoutingModule } from './care-plan-routing.module';

import { CarePlanPage } from './care-plan.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarePlanPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CarePlanPage]
})
export class CarePlanPageModule {}
