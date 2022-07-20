import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsPageRoutingModule } from './alerts-routing.module';

import { AlertsPage } from './alerts.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlertsPage]
})
export class AlertsPageModule {}
